import React from "react";
import { FaHeart } from "react-icons/fa";

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <h1 className="header-title">
        Hi, I'm a web developer with a <FaHeart />
        &nbsp;for game development
      </h1>
      ;
    </header>
  );
};

export default Header;
