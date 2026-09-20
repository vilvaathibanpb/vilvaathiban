/**
 * GDPR cookie consent banner.
 *
 * Deliberate choices:
 *  - Reject is exactly as prominent as Accept. A banner where refusing is
 *    harder than accepting is not valid consent under GDPR, and that is the
 *    single most common reason these banners get challenged.
 *  - Nothing loads before a choice is made, so a visitor who ignores the
 *    banner is tracked exactly as much as one who rejects: not at all.
 *  - The choice can be changed later from the footer link, which calls
 *    window.openCookieSettings().
 *  - Styles are inline so this component drops into any project regardless of
 *    Tailwind/CSS-module setup.
 */

import { useEffect, useState } from 'react';
import { getConsent, setConsent, initAnalytics } from '../lib/analytics';

export default function CookieConsent({ privacyHref = '/privacy' }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    initAnalytics();
    if (getConsent() === null) setVisible(true);
    window.openCookieSettings = () => setVisible(true);
    return () => {
      delete window.openCookieSettings;
    };
  }, []);

  if (!visible) return null;

  const choose = (state) => {
    setConsent(state);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2147483000,
        background: '#ffffff',
        borderTop: '1px solid #e5e7eb',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.08)',
        padding: '16px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p
          style={{
            margin: 0,
            flex: '1 1 340px',
            fontSize: '14px',
            lineHeight: 1.6,
            color: '#374151',
          }}
        >
          We&apos;d like to use Google Analytics to understand which pages people find
          useful. It sets cookies and sends your usage data to Google. We only do it if
          you say yes, and the site works exactly the same if you say no.{' '}
          <a href={privacyHref} style={{ color: '#2563eb', textDecoration: 'underline' }}>
            Privacy &amp; cookies
          </a>
        </p>
        <div style={{ display: 'flex', gap: '10px', flex: '0 0 auto' }}>
          <button
            type="button"
            onClick={() => choose('denied')}
            style={{
              padding: '10px 18px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              background: '#ffffff',
              color: '#374151',
            }}
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            style={{
              padding: '10px 18px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              borderRadius: '6px',
              border: '1px solid #111827',
              background: '#111827',
              color: '#ffffff',
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

/** Footer link that lets a visitor revisit their choice. */
export function CookieSettingsLink({ className = '', style = {} }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        if (typeof window !== 'undefined' && window.openCookieSettings) {
          window.openCookieSettings();
        }
      }}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        font: 'inherit',
        color: 'inherit',
        cursor: 'pointer',
        textDecoration: 'underline',
        ...style,
      }}
    >
      Cookie settings
    </button>
  );
}
