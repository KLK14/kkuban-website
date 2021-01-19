/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as styles from "../styles/header";
import React from "react";
import { FaHeart } from "react-icons/fa";

const Header: React.FunctionComponent = () => {
  return (
    <header css={styles.header}>
      <h1 css={styles.headerTitle}>
        Hi, I'm a web developer with a <FaHeart />
        &nbsp;for game development
      </h1>
      ;
    </header>
  );
};

export default Header;
