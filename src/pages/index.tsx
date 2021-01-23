/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import Header from "../components/header";
import AboutMe from "../components/aboutMe";
import Projects from "../components/projects";
import { main } from "../styles/global";

const HomePage: React.FunctionComponent = () => {
  return (
    <main css={main}>
      <title>Home Page</title>
      <Header />
      <AboutMe />
      <Projects />
    </main>
  );
};

export default HomePage;
