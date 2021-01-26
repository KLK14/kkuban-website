import { css } from "@emotion/react";
import { colors, textColors } from "./global";
// import wave from "../images/wave.svg";s

export const container = css`
  margin-bottom: 6vh;
  background-image: linear-gradient(to top, #e1415f, ${colors.contrastColor});

  @media (min-width: 1100px) {
    background-image: linear-gradient(
      to left,
      #e1415f,
      ${colors.contrastColor}
    );
  }
`;

export const aboutText = css`
  color: ${textColors.textColor};

  @media (min-width: 1100px) {
    margin-top: 5vh;
    margin-right: 6vw;
  }
  @media (max-width: 600px) {
    padding: 0 8vw;
  }

  p {
    font-size: larger;
  }
  a {
    color: #f9f1f1;
  }
`;

export const aboutImage = css`
  width: 25%;
  height: 25%;
  margin: 3rem;
  border-radius: 50%;
  border: 0.2rem solid #ffffff;

  @media (min-width: 1100px) {
    margin-left: 4vw;
    margin-top: 10vh;
  }

  Img {
    border-radius: 50%;
  }
`;

export const background = css`
  bottom: 0;
  width: 100%;
  margin-bottom: -5px;

  @media (min-height: 1100px) {
    margin-top: -10%;
  }
`;
