import AppLanding from "../../../components/appLanding";
import { LANGS, SLUGS, getApp } from "../../../data/apps";

export default function LocalizedAppPage({ code, slug }) {
  return <AppLanding {...getApp(code, slug)} />;
}

export async function getStaticPaths() {
  const paths = [];
  for (const l of LANGS) {
    if (l.code === "en") continue; // English lives at /apps/<slug>
    for (const slug of SLUGS) paths.push({ params: { lang: l.code, slug } });
  }
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { code: params.lang, slug: params.slug } };
}
