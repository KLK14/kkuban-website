import { css } from "@emotion/react";
import { colors, textColors } from "./global";
// import wave from "../images/wave.svg";s

export const container = css`
  position: relative;
  margin-bottom: 5vh;
  width: 100%;
  background-image: linear-gradient(to top, #e1415f, ${colors.contrastColor});

  @media (min-width: 1200px) {
    height: 70vh;
    background-image: linear-gradient(
      to left,
      #e1415f,
      ${colors.contrastColor}
    );
  }
`;

export const aboutText = css`
  color: ${textColors.textColor};
  margin-bottom: 20vh;

  @media (min-width: 1200px) {
    margin-top: 5vh;
    margin-right: 6vw;
  }
  @media (max-width: 600px) {
    padding: 0 8vw;
    margin-bottom: 10vh;
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

  @media (min-width: 1200px) {
    margin-left: 4vw;
    margin-top: 10vh;
  }

  Img {
    border-radius: 50%;
  }
`;

export const background = css`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
