import React from "react";
import Header from "../components/header";
import AboutMe from "../components/aboutMe";

const HomePage: React.FunctionComponent = () => {
  return (
    <main className="main">
      <title>Home Page</title>
      <Header />
      <AboutMe />
    </main>
  );
};

export default HomePage;
