/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import * as styles from "../styles/footer";
import Wave from "../res/images/waveInvert.svg";
import {
  FaGithub,
  FaLinkedin,
  FaXingSquare,
  FaRegCopyright,
} from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

const Footer: React.FunctionComponent = () => {
  return (
    <div css={styles.container}>
      <Wave css={styles.background}></Wave>
      <div css={styles.flexContainer}>
        <h2 css={styles.text}>Get in touch</h2>
        <div>
          <a href={"mailto:katharina.kuban@web.de"}>
            <ImMail4 css={styles.icon} />
          </a>
          <a href={"https://de.linkedin.com/in/katharina-kuban-9744271b8"}>
            <FaLinkedin css={styles.icon} />
          </a>
          <a href={"https://www.xing.com/profile/Katharina_Kuban2"}>
            <FaXingSquare css={styles.icon} />
          </a>
          <a href={"https://github.com/KLK14"}>
            <FaGithub css={styles.icon} />
          </a>
        </div>
        <p>
          handmade
          <FaRegCopyright css={styles.textIcon} />
          Katharina Kuban
        </p>
      </div>
    </div>
  );
};

export default Footer;
