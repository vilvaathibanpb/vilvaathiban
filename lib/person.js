// Canonical author identity (E-E-A-T). The Person JSON-LD is emitted on every
// page from pages/_document.js; Article / BlogPosting / app schema reference it
// by @id so search engines merge them into one entity.

export const PERSON_ID = "https://vilvaathiban.com/#person";

export const PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Vilva Athiban P B",
  url: "https://vilvaathiban.com",
  image: "https://vilvaathiban.com/vilva.png",
  jobTitle: "Lead AI Engineer",
  worksFor: { "@type": "Organization", name: "Omio", url: "https://www.omio.com" },
  sameAs: [
    "https://www.linkedin.com/in/vilvaathiban",
    "https://github.com/vilvaathibanpb",
    "https://twitter.com/vilvaathibanpb",
    "https://blog.logrocket.com/author/vilvaathibanpb/",
    "https://www.youtube.com/@vilvaathiban9144",
    // TODO: add Sessionize profile URL
  ],
};

// Compact reference for `author` / `publisher` fields.
export const PERSON_REF = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: PERSON.name,
  url: PERSON.url,
};

export const AUTHOR_BIO =
  "Vilva Athiban P B is a Lead AI Engineer at Omio, building agentic AI in production. He is a conference speaker and a LogRocket author, and builds small, privacy-first apps at vilvaathiban.com.";

export const AUTHOR_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vilvaathiban" },
  { label: "GitHub", href: "https://github.com/vilvaathibanpb" },
  { label: "X", href: "https://twitter.com/vilvaathibanpb" },
  { label: "LogRocket", href: "https://blog.logrocket.com/author/vilvaathibanpb/" },
];
