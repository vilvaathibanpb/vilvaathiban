import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "../about";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, JsonLd } from "../../components/service";
import { getAllPosts } from "../../data/posts";

const URL = "https://vilvaathiban.com/blog";

const List = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const PostCard = styled.a`
  display: block;
  padding: 26px 0;
  border-top: 1px solid #ececea;
  cursor: pointer;

  &:last-child {
    border-bottom: 1px solid #ececea;
  }

  h2 {
    font-family: ui-serif, Georgia, serif;
    font-size: 24px;
    font-weight: 700;
    color: #111827;
    letter-spacing: -0.01em;
    line-height: 1.3;
    margin: 0 0 8px;
    transition: color 120ms ease;
  }

  &:hover h2 {
    color: #475569;
  }

  p {
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 15.5px;
    color: #374151;
    line-height: 1.6;
    margin: 0 0 10px;
  }
`;

const PostMeta = styled.div`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 12.5px;
  color: #475569;
  letter-spacing: 0.02em;
`;

const ExternalNote = styled.p`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  margin-top: 32px;
  font-size: 14.5px;
  color: #475569;

  a {
    color: #111827;
    font-weight: 600;
    border-bottom: 1px solid #cbd5e1;
    cursor: pointer;
    transition: border-color 120ms ease;
  }
  a:hover {
    border-color: #111827;
  }
`;

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

const LD = (postList) => [
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Articles by Vilva Athiban P B",
    url: URL,
    author: {
      "@type": "Person",
      name: "Vilva Athiban P B",
      url: "https://vilvaathiban.com/about",
    },
    blogPost: postList.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.datePublished,
      url: `${URL}/${p.slug}`,
    })),
  },
];

export default function BlogIndex({ postList }) {
  return (
    <Container>
      <Head>
        <title>Articles | Vilva Athiban P B — AI, React & JavaScript Engineering</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={URL} />
        <meta name="theme-color" content="#3AAFA8" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:site_name" content="vilvaathiban.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta
          property="og:title"
          content="Articles by Vilva Athiban — AI, React & JavaScript engineering"
        />
        <meta
          property="og:description"
          content="Long-form, practical articles on AI engineering, React and JavaScript by Vilva Athiban P B — Lead AI Engineer, speaker and educator."
        />
        <meta
          name="description"
          content="Long-form, practical articles on AI engineering, React and JavaScript by Vilva Athiban P B — Lead AI Engineer, speaker and educator."
        />
        <JsonLd data={LD(postList)} />
      </Head>
      <Header />
      <Wrap>
        <Eyebrow>Writing · Articles</Eyebrow>
        <Title>Articles</Title>
        <Lead>
          Long-form, practical writing on AI engineering, React and JavaScript —
          hosted right here.
        </Lead>
        <List>
          {postList.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} passHref legacyBehavior>
              <PostCard>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <PostMeta>
                  {formatDate(post.datePublished)} · {post.readingMinutes} min read
                </PostMeta>
              </PostCard>
            </Link>
          ))}
        </List>
        <ExternalNote>
          Looking for my posts on Medium, dev.to and elsewhere? See{" "}
          <Link href="/blogs" passHref legacyBehavior>
            <a>external writing</a>
          </Link>
          .
        </ExternalNote>
      </Wrap>
      <Footer />
    </Container>
  );
}

export async function getStaticProps() {
  const postList = getAllPosts().map(({ content, ...rest }) => rest);
  return { props: { postList } };
}
