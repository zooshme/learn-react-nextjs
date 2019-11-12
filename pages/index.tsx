import React from "react";
import { Heading } from "../components/Heading";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { LessonCard } from "../components/LessonCard";
import { ThemeToggle } from "../components/ThemeToggle";
import Toc from "../lessons/toc.mdx";
import { Course } from "../components/Course";

const Home = () => (
  <>
    <Header />
    <Container>
      <Heading level={1}>Learn React</Heading>

      <LessonCard
        title="JSX"
        subtitle="HTML in JavaScript"
        url="/lessons/jsx"
      />

      <ThemeToggle themeName={"light"} />

      <Toc />


      <Course title="JavaScript" subtitle="An Introduction"></Course>

      <Course title="From ES6 to ES9" subtitle="JavaScript Superpowers" />

      <Course title="React.js" subtitle=""></Course>

      <Course title="CSS"></Course>

      <Course title="SASS"></Course>
    </Container>
  </>
);

export default Home;
