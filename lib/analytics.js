/**
 * Consent-gated Google Analytics 4 + blog engagement instrumentation.
 *
 * Nothing here runs, and gtag.js is never downloaded, until the visitor has
 * actively accepted analytics cookies. That is stricter than Google Consent
 * Mode's "load with analytics_storage denied" pattern, and it is the posture
 * German supervisory authorities expect: no analytics request of any kind
 * before consent, and no cookie set by a rejected visit.
 *
 * Replace GA_ID per site. Everything else is identical across sites so a fix
 * made once can be copied everywhere.
 */

export const GA_ID = 'G-61R2KXMMWF';

export const CONSENT_KEY = 'cookie-consent';
export const CONSENT_VERSION = 'v1'; // bump to re-ask everyone after a policy change

const isBrowser = () => typeof window !== 'undefined';

/** 'granted' | 'denied' | null (never asked) */
export function getConsent() {
  if (!isBrowser()) return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed.state === 'granted' ? 'granted' : 'denied';
  } catch {
    // Private mode, blocked storage, or corrupted value: treat as never asked.
    return null;
  }
}

export function setConsent(state) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ state, version: CONSENT_VERSION, at: new Date().toISOString() })
    );
  } catch {
    /* storage unavailable: the choice applies to this page view only */
  }
  if (state === 'granted') {
    startAnalytics();
  } else {
    stopAnalytics();
  }
}

function gtag() {
  if (!isBrowser()) return;
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

let started = false;
let teardown = [];

/** Injects gtag.js once and wires up engagement tracking. */
export function startAnalytics() {
  if (!isBrowser() || started || !GA_ID || GA_ID.startsWith('__')) return;
  started = true;

  if (!document.getElementById('ga-script')) {
    const s = document.createElement('script');
    s.id = 'ga-script';
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  }

  gtag('js', new Date());
  // Analytics only. We never ask for advertising consent, so those stay denied.
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted',
  });
  gtag('config', GA_ID, {
    anonymize_ip: true,
    send_page_view: true,
  });

  attachEngagementTracking();
}

/** Called when consent is withdrawn. Clears GA cookies for this visitor. */
export function stopAnalytics() {
  if (!isBrowser()) return;
  started = false;
  teardown.forEach((fn) => {
    try { fn(); } catch { /* listener already gone */ }
  });
  teardown = [];
  window[`ga-disable-${GA_ID}`] = true;
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim();
    if (name.startsWith('_ga')) {
      const domain = window.location.hostname.replace(/^www\./, '');
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${domain}`;
    }
  });
}

/** Safe to call anywhere: a no-op until consent is granted. */
export function trackEvent(name, params = {}) {
  if (!isBrowser() || !started) return;
  gtag('event', name, params);
}

/** Call on client-side route changes so SPA navigations are counted. */
export function trackPageView(path) {
  if (!isBrowser() || !started) return;
  gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
  resetPageEngagement(path);
}

/* ------------------------------------------------------------------ *
 * Blog engagement: how far people read, which sections hold them, and
 * whether they leave through a link that matters.
 * ------------------------------------------------------------------ */

let pageState = null;

function resetPageEngagement(path) {
  if (pageState && pageState.sectionTimer) clearInterval(pageState.sectionTimer);
  pageState = {
    path: path || window.location.pathname,
    startedAt: Date.now(),
    maxScroll: 0,
    firedDepths: new Set(),
    firedTimes: new Set(),
    sections: new Map(), // heading text -> seconds visible
    currentSection: null,
    sectionTimer: null,
    completed: false,
  };
  observeSections();
  pageState.sectionTimer = setInterval(tickSection, 1000);
}

function tickSection() {
  if (!pageState || !pageState.currentSection) return;
  const key = pageState.currentSection;
  pageState.sections.set(key, (pageState.sections.get(key) || 0) + 1);
}

function observeSections() {
  if (typeof IntersectionObserver === 'undefined') return;
  const headings = Array.from(document.querySelectorAll('article h2, article h3, main h2, main h3'));
  if (!headings.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const title = (entry.target.textContent || '').trim().slice(0, 100);
        if (!title || !pageState) return;
        if (pageState.currentSection !== title) {
          flushSection();
          pageState.currentSection = title;
          trackEvent('section_view', {
            section_title: title,
            page_path: pageState.path,
          });
        }
      });
    },
    { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
  );
  headings.forEach((h) => io.observe(h));
  teardown.push(() => io.disconnect());
}

/** A section counts as "read" once it held the viewport for 5s or more. */
function flushSection() {
  if (!pageState || !pageState.currentSection) return;
  const title = pageState.currentSection;
  const seconds = pageState.sections.get(title) || 0;
  if (seconds >= 5) {
    trackEvent('section_read', {
      section_title: title,
      seconds_in_section: seconds,
      page_path: pageState.path,
    });
  }
  pageState.currentSection = null;
}

function onScroll() {
  if (!pageState) return;
  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - window.innerHeight;
  if (scrollable <= 0) return;
  const pct = Math.min(100, Math.round((window.scrollY / scrollable) * 100));
  if (pct > pageState.maxScroll) pageState.maxScroll = pct;

  [25, 50, 75, 100].forEach((mark) => {
    if (pct >= mark && !pageState.firedDepths.has(mark)) {
      pageState.firedDepths.add(mark);
      trackEvent('scroll_depth', { percent_scrolled: mark, page_path: pageState.path });
    }
  });

  // "Read to the end" is scroll plus dwell: skimming to the bottom in four
  // seconds is not reading, so require both before calling it a completion.
  const seconds = Math.round((Date.now() - pageState.startedAt) / 1000);
  if (!pageState.completed && pageState.maxScroll >= 90 && seconds >= 30) {
    pageState.completed = true;
    trackEvent('article_completed', {
      page_path: pageState.path,
      seconds_on_page: seconds,
    });
  }
}

function onTick() {
  if (!pageState) return;
  const seconds = Math.round((Date.now() - pageState.startedAt) / 1000);
  [15, 30, 60, 120, 300].forEach((mark) => {
    if (seconds >= mark && !pageState.firedTimes.has(mark)) {
      pageState.firedTimes.add(mark);
      trackEvent('time_on_page', { seconds_threshold: mark, page_path: pageState.path });
    }
  });
}

function onClick(e) {
  const link = e.target && e.target.closest && e.target.closest('a');
  if (!link) return;
  const href = link.getAttribute('href') || '';
  const cta = link.getAttribute('data-cta');

  if (cta) {
    trackEvent('cta_click', {
      cta_id: cta,
      link_text: (link.textContent || '').trim().slice(0, 100),
      page_path: pageState ? pageState.path : window.location.pathname,
    });
  }

  if (/^https?:\/\//i.test(href) && !href.includes(window.location.hostname)) {
    trackEvent('outbound_click', {
      link_url: href,
      link_text: (link.textContent || '').trim().slice(0, 100),
      page_path: pageState ? pageState.path : window.location.pathname,
    });
  }
}

function onHide() {
  if (!pageState || document.visibilityState !== 'hidden') return;
  flushSection();
  const seconds = Math.round((Date.now() - pageState.startedAt) / 1000);
  trackEvent('page_engagement', {
    page_path: pageState.path,
    seconds_on_page: seconds,
    max_scroll: pageState.maxScroll,
    sections_read: pageState.sections.size,
  });
}

function attachEngagementTracking() {
  resetPageEngagement(window.location.pathname);

  const scrollHandler = () => window.requestAnimationFrame(onScroll);
  const timeInterval = setInterval(onTick, 5000);

  window.addEventListener('scroll', scrollHandler, { passive: true });
  document.addEventListener('click', onClick, true);
  document.addEventListener('visibilitychange', onHide);

  teardown.push(() => window.removeEventListener('scroll', scrollHandler));
  teardown.push(() => document.removeEventListener('click', onClick, true));
  teardown.push(() => document.removeEventListener('visibilitychange', onHide));
  teardown.push(() => clearInterval(timeInterval));
  teardown.push(() => {
    if (pageState && pageState.sectionTimer) clearInterval(pageState.sectionTimer);
  });
}

/** Starts analytics on load if the visitor already consented. */
export function initAnalytics() {
  if (!isBrowser()) return;
  if (getConsent() === 'granted') startAnalytics();
}
