import Head from "next/head";
import Script from "next/script";
import styled from "styled-components";
import { ItemsContainer } from "../../components/common";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Subscribe from "../../components/Subscribe";
import { Container } from "../about";
import Review from "../../components/Review";

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
    .lg:mx-20;
`;

const Img = styled.img`
    .lg:w-1/4;
    .w-full;
`;

const UPIContainer = styled.div`
    .lg:w-1/2;
    .w-full;
    .text-center;
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
        <H1>Build complex Animations with ease</H1>
        <P>
          Get ready to bring your web projects to life! In our workshop, we're
          diving into the world of animations using React and Framer Motion. 🚀
        </P>
        <P>
          Ever wondered how to make your website more engaging with smooth,
          eye-catching animations? Look no further! We'll guide you through the
          process step by step, using the power of React and the simplicity of
          Framer Motion.
        </P>
        <P>
          No need to be a coding expert—we'll break it down into easy-to-follow
          steps. By the end of the workshop, you'll have the skills to add that
          extra flair to your web projects and make them stand out. Let's turn
          your ideas into dynamic, animated realities! 🎉
        </P>
        <ItemsContainer style={{ paddingBottom: 0 }}>
          <div>
            <H2>
              Date - 27.01.2023,
              <br /> Time: 11.00 to 16.30 IST
            </H2>
            <ul>
              <H3>Session 1: Framer motion and Animations</H3>
              <li>Introduction to Framer Motion</li>
              <li>Framer motion under the hood</li>
              <li>Create your first Animation</li>
              <li>Build basic animations with minimal lines of code</li>
            </ul>
            <ul>
              <H3>Session 2: Advanced Animation Techniques</H3>
              <li>Build dynamic animations</li>
              <li>Animations dependent on other components' states</li>
              <li>Build Complex real-time animations</li>
              <li>Recreate famous animations of famous products</li>
              <li>
                Optimize animations for device, accessibility and battery use
                etc
              </li>
              <li>Dos and Donts and next steps</li>
            </ul>
          </div>
        </ItemsContainer>
      </ItemsContainer>
      <ItemsContainer>
        <H2>Pay using UPI</H2>
        <ItemsContainer style={{ paddingBottom: 0 }}>
          <UPIContainer>
            <H3>
              UPI id: <span style={{ color: "#17252A" }}>vilvaathiban@ybl</span>
            </H3>
            <H3>
              Super Early bird :{" "}
              <span style={{ color: "#17252A" }}>Rs. 2,500 - 5 remaining</span>{" "}
              <br />
              Early bird :{" "}<span style={{ color: "#17252A" }}>Rs. 3,000</span>
              <br />
              Normal :{" "}<span style={{ color: "#17252A" }}>Rs. 4,500</span>
              <br />
              Late Bird :{" "}<span style={{ color: "#17252A" }}>Rs. 6,000</span>
              <br />
            </H3>
            <P>(Get in touch with me if you are a student for discounts)</P>
            <P>
              Please send your email id in the UPI apps/my social apps for
              reference. Also, you will get email confirmation of the payment
              and other details of the workshop in the email sent in the UPI
              apps with 24 hours from the payment time.{" "}
            </P>
          </UPIContainer>
          <Img src="https://drive.google.com/uc?export=view&id=1aLP9L6TfVDktz9-Mr2hktD73sDM2oUFO" />
        </ItemsContainer>
      </ItemsContainer>
      <ItemsContainer>
        <H2>International payments please contact me.</H2>
      </ItemsContainer>
      <Review />
      {/* <stripe-pricing-table
        pricing-table-id="prctbl_1MK9MYSGibx489JLsUmjGEll"
        publishable-key="pk_live_51MK8i7SGibx489JLID4IeFoId1pUSMUIUYyAWkdnrGbDkQ6AKV0zPL2GeW8EpgQlPKwnjf7VVFjWzXkIhvTHVt0Z000nce39J4"
      ></stripe-pricing-table> */}
      <Subscribe />
      <Footer />
    </Container>
  );
}
