import styled from "styled-components";
import Head from "next/head";
import { Container } from "./about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blogs } from "../data/blogs";
import EntityComponent from "../components/EntityComponent";
import { ItemsContainer } from "../components/common";

export default function BlogsPage() {
  return (
    <Container>
      <Head>
        <title>
          Tech Blogs of Vilva Athiban P B | JavaScript developer & Trainer
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ItemsContainer>
        {blogs.reverse().map(blog => {
          return <EntityComponent data={blog} key={blog.order} />;
        })}
      </ItemsContainer>
      <Footer />
    </Container>
  );
}
