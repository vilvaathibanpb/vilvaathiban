import Head from "next/head";
import { Container } from "./about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ItemsContainer } from "../components/common";
import Review from "../components/Review";

export default function TalksPage() {
  return (
    <Container>
      <Head>
        <title>
          Reviews about Vilva's workshops | JavaScript developer & Trainer
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
        <Review />
      <Footer />
    </Container>
  );
}
