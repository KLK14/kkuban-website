/** @jsx jsx */
import { Global, jsx } from "@emotion/react";
import React from "react";
import Header from "../components/header";
import AboutMe from "../components/aboutMe";
import Projects from "../components/projects";
import Footer from "../components/footer";
import { main, global } from "../styles/global";

const HomePage: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Global styles={global} />
      <div css={main}>
        <title>Home Page</title>
        <Header />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
