/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as styles from "../styles/header";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { text } from "../styles/footer";

const Header: React.FunctionComponent = () => {
  return (
    <header css={styles.header}>
      <h1>
        <span>Hi, I'm a web developer with a</span>
        <FaHeart css={styles.textIcon} />
        <span>for game development</span>
      </h1>
    </header>
  );
};

export default Header;
