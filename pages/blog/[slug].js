import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "../about";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, JsonLd } from "../../components/service";
import { getAllPosts, getPostBySlug } from "../../data/posts";

const SITE = "https://vilvaathiban.com";

const PostMeta = styled.div`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  color: #475569;
  letter-spacing: 0.02em;
  margin: 14px 0 6px;
`;

const CodeBlock = styled.pre`
  background: #111827;
  color: #e5e7eb;
  border-radius: 10px;
  padding: 18px 20px;
  overflow-x: auto;
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 18px;

  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    background: transparent;
    padding: 0;
    color: inherit;
    font-size: inherit;
  }
`;

const Prose = styled.div`
  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 0.88em;
    background: #ececea;
    color: #111827;
    padding: 2px 6px;
    border-radius: 5px;
  }
`;

const BackRow = styled.div`
  margin-top: 56px;
  padding-top: 28px;
  border-top: 1px solid #ececea;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 14.5px;

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

// Renders `inline code`, **bold** and *italic* spans without a markdown dependency.
const renderInline = (text) => {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
};

const Block = ({ block }) => {
  if (block.type === "code") {
    return (
      <CodeBlock>
        <code className={block.language ? `language-${block.language}` : undefined}>
          {block.code}
        </code>
      </CodeBlock>
    );
  }
  if (block.type === "list") {
    return (
      <ul>
        {block.items.map((item, i) => (
          <li key={i}>{renderInline(item)}</li>
        ))}
      </ul>
    );
  }
  return <p>{renderInline(block.text)}</p>;
};

const LD = (post, url) => [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      name: "Vilva Athiban P B",
      jobTitle: "Lead AI Engineer",
      url: `${SITE}/about`,
    },
    publisher: {
      "@type": "Person",
      name: "Vilva Athiban P B",
      url: `${SITE}/about`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Articles", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  },
];

export default function BlogPost({ post }) {
  const url = `${SITE}/blog/${post.slug}`;
  return (
    <Container>
      <Head>
        <title>{`${post.title} | Vilva Athiban P B`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={url} />
        <meta name="theme-color" content="#3AAFA8" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:site_name" content="vilvaathiban.com" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="article:published_time" content={post.datePublished} />
        <meta property="article:author" content="Vilva Athiban P B" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="description" content={post.description} />
        <JsonLd data={LD(post, url)} />
      </Head>
      <Header />
      <Wrap>
        <Eyebrow>Writing · Article</Eyebrow>
        <Title>{post.title}</Title>
        <PostMeta>
          Vilva Athiban P B · {formatDate(post.datePublished)} ·{" "}
          {post.readingMinutes} min read
        </PostMeta>
        <Lead>{post.description}</Lead>
        <Prose>
          {post.content.map((section, i) => (
            <Section key={i}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.blocks.map((block, j) => (
                <Block key={j} block={block} />
              ))}
            </Section>
          ))}
        </Prose>
        <BackRow>
          ←{" "}
          <Link href="/blog" passHref legacyBehavior>
            <a>All articles</a>
          </Link>{" "}
          ·{" "}
          <Link href="/blogs" passHref legacyBehavior>
            <a>External writing</a>
          </Link>
        </BackRow>
      </Wrap>
      <Footer />
    </Container>
  );
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { notFound: true };
  }
  return { props: { post } };
}
