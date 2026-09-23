import baseEn from "./en";
import extraEn from "./extra/en";

// New apps (utility-apps workspace, Sept 2026) live in ./extra/<lang>.js so the
// original per-language files stay untouched; they are merged here.
function withExtra(base, extra) {
  return { ...base, apps: { ...(base.apps || {}), ...(extra || {}) } };
}
const en = withExtra(baseEn, extraEn);

// The 15 most-searched languages on the web. `path` is the URL prefix ("" for
// English, which stays at /apps/<slug>); `hreflang` is what search engines get.
export const LANGS = [
  { code: "en", path: "", hreflang: "en", name: "English", dir: "ltr" },
  { code: "es", path: "/es", hreflang: "es", name: "Español", dir: "ltr" },
  { code: "zh", path: "/zh", hreflang: "zh-Hans", name: "简体中文", dir: "ltr" },
  { code: "hi", path: "/hi", hreflang: "hi", name: "हिन्दी", dir: "ltr" },
  { code: "ar", path: "/ar", hreflang: "ar", name: "العربية", dir: "rtl" },
  { code: "pt", path: "/pt", hreflang: "pt-BR", name: "Português", dir: "ltr" },
  { code: "ru", path: "/ru", hreflang: "ru", name: "Русский", dir: "ltr" },
  { code: "ja", path: "/ja", hreflang: "ja", name: "日本語", dir: "ltr" },
  { code: "fr", path: "/fr", hreflang: "fr", name: "Français", dir: "ltr" },
  { code: "de", path: "/de", hreflang: "de", name: "Deutsch", dir: "ltr" },
  { code: "id", path: "/id", hreflang: "id", name: "Bahasa Indonesia", dir: "ltr" },
  { code: "ko", path: "/ko", hreflang: "ko", name: "한국어", dir: "ltr" },
  { code: "tr", path: "/tr", hreflang: "tr", name: "Türkçe", dir: "ltr" },
  { code: "it", path: "/it", hreflang: "it", name: "Italiano", dir: "ltr" },
  { code: "vi", path: "/vi", hreflang: "vi", name: "Tiếng Việt", dir: "ltr" },
];

export const SLUGS = Object.keys(en.apps);

// Translations are loaded statically so `next export` can inline them.
const LOCALES = {
  en,
  es: withExtra(require("./es").default, require("./extra/es").default),
  zh: withExtra(require("./zh").default, require("./extra/zh").default),
  hi: withExtra(require("./hi").default, require("./extra/hi").default),
  ar: withExtra(require("./ar").default, require("./extra/ar").default),
  pt: withExtra(require("./pt").default, require("./extra/pt").default),
  ru: withExtra(require("./ru").default, require("./extra/ru").default),
  ja: withExtra(require("./ja").default, require("./extra/ja").default),
  fr: withExtra(require("./fr").default, require("./extra/fr").default),
  de: withExtra(require("./de").default, require("./extra/de").default),
  id: withExtra(require("./id").default, require("./extra/id").default),
  ko: withExtra(require("./ko").default, require("./extra/ko").default),
  tr: withExtra(require("./tr").default, require("./extra/tr").default),
  it: withExtra(require("./it").default, require("./extra/it").default),
  vi: withExtra(require("./vi").default, require("./extra/vi").default),
};

// Structural fields (ids, prices, image paths, colours) are only defined in
// English; translations carry copy only and inherit the rest.
export function getApp(code, slug) {
  const lang = LANGS.find((l) => l.code === code) || LANGS[0];
  const base = en.apps[slug];
  const loc = LOCALES[lang.code] || en;
  const t = (loc.apps && loc.apps[slug]) || {};
  const app = {
    ...base,
    ...t,
    slug: base.slug,
    iconBase: base.iconBase,
    appStoreId: base.appStoreId,
    appStoreUrl: base.appStoreUrl,
    playUrl: base.playUrl,
    live: base.live,
    price: base.price,
    color: base.color,
    category: base.category,
    name: base.name,
    screenshots: (t.screenshots || base.screenshots).map((s, i) => ({ ...base.screenshots[i], ...s })),
    features: (t.features || base.features).map((f, i) => ({ ...base.features[i], ...f })),
    guides: (t.guides || base.guides).map((g, i) => ({ ...base.guides[i], ...g })),
    related: (t.related || base.related).map((r, i) => ({ ...base.related[i], ...r })),
  };
  return { app, lang, ui: { ...en.ui, ...(loc.ui || {}) } };
}
