import React from "react";
import Header from "../components/header";
import AboutMe from "../components/aboutMe";
import Projects from "../components/projects";

const HomePage: React.FunctionComponent = () => {
  return (
    <main>
      <title>Home Page</title>
      <Header />
      <AboutMe />
      <Projects />
    </main>
  );
};

export default HomePage;
