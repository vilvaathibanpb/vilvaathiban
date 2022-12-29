import Head from "next/head";
import Script from "next/script";
import styled from "styled-components";
import { ItemsContainer } from "../../components/common";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Subscribe from "../../components/Subscribe";
import { Container } from "../about";

const H1 = styled.h1`
    .text-pdark;
`;

const H3 = styled.h3`
    .text-pwhite;
`;

const H2 = styled.h2`
    .text-pwhite;
`;

const P = styled.p`
    .text-pdark;
    .mx-20;
`;

export default function WebToolingWorkshop() {
  return (
    <Container>
      <Script async src="https://js.stripe.com/v3/pricing-table.js" />
      <Head>
        <title>
          Workshops conducted by Vilva Athiban P B | JavaScript developer &
          Trainer
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3AAFA8" />
        <meta property="og:site_name" content="vilvaathiban.com" />
        <meta property="og:site" content="vilvaathiban.com" />
        <meta
          property="og:title"
          content="Vilva Athiban - The JS Jockey | JavaScript Expert & Mentor"
        />
        <meta
          property="og:description"
          content="Vilva Athiban is a Web expert who specialize in JavsScript. He is active Open source developer and loves sharing his knowledge through talks, workshops, blogs, videos etc"
        />
        <meta property="og:type" content="portfolio" />

        <meta
          name="description"
          content="Vilva Athiban is a Web expert who specialize in JavsScript. He is active Open source developer and loves sharing his knowledge through talks, workshops, blogs, videos etc"
        />
        <meta
          name="keywords"
          content="react, javascript, training, tutorial, learn, mentor, instructor, coaching, startup, javascript, graphql, apollo, webpack, reactjs, angularjs, nodejs"
        />
      </Head>
      <Header />
      <ItemsContainer>
        <H1>Web Tooling - 101</H1>
        <P>
          Chat-GPT3 might have gathered your attention and as a web developer
          you may be insecure that Chat-GPT3 might replace you. It might build
          components with CSS but it may not manage web tooling easily or
          effectively. In today's world of Frontend, it is impossible to build
          apps without toolings like Webpack, Babel, ESLint and Storybook. But
          most of the developers dont really get the 100% benefits of these
          tools.
        </P>
        <P>
          A production app requires a lot of customization and migration and
          these tools lets us take care of it like a pro. We can build custom
          babel plugins, webpack plugins, eslint rule etc. to improve the
          quality of codebase and easy maintenance. This workshop will be a
          hands-on workshop where all of us will build a webpack plugin, a babel
          plugin, a ESLint plugin and storybook addon for a demo app mimicing
          real life use-cases. The structure of the Workshop will be like below
        </P>
        <ItemsContainer>
          <div>
            <H2>Day 1 - 28.01.2023</H2>
            <ul>
              <H3>Session 1: Storybook Addon</H3>
              <li>Storybook Introduction</li>
              <li>Storybook Architecture</li>
              <li>Addons and its architecture</li>
              <li>Build a custom Addon and publish it</li>
              <li>Integrate the custom Addon into a demo storybook</li>
            </ul>
            <ul>
              <H3>Session 2: ESLint Plugin</H3>
              <li>ESLint Introduction</li>
              <li>ESLint Architecture</li>
              <li>ESLint Plugins and its architecture</li>
              <li>Build a custom ESLint plugin and publish it</li>
              <li>Integrate the custom ESLint plugin into a demo app</li>
            </ul>
          </div>
          <div>
            <H2>Day 2 - 29.01.2023</H2>
            <ul>
              <H3>Session 1: Babel Plugin</H3>
              <li>Babel Introduction</li>
              <li>Babel Architecture</li>
              <li>Babel plugin and its architecture</li>
              <li>Build a Babel plugin and publish it</li>
              <li>Integrate the Babel plugin into a demo app</li>
            </ul>
            <ul>
              <H3>Session 2: Webpack Plugin</H3>
              <li>Webpack Introduction</li>
              <li>Webpack Architecture</li>
              <li>Webpack Plugin and its architecture</li>
              <li>Build a custom Webpack Plugin and publish it</li>
              <li>Integrate the custom Webpack Plugin into a demo app</li>
            </ul>
          </div>
        </ItemsContainer>
      </ItemsContainer>
      <stripe-pricing-table
        pricing-table-id="prctbl_1MK9MYSGibx489JLsUmjGEll"
        publishable-key="pk_live_51MK8i7SGibx489JLID4IeFoId1pUSMUIUYyAWkdnrGbDkQ6AKV0zPL2GeW8EpgQlPKwnjf7VVFjWzXkIhvTHVt0Z000nce39J4"
      ></stripe-pricing-table>
      <Subscribe />
      <Footer />
    </Container>
  );
}
