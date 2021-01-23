import { css } from "@emotion/react";
import { colors, textColors } from "./global";
// import wave from "../images/wave.svg";s

export const container = css`
  position: relative;
  margin-bottom: 20vh;
  padding: 0;
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
  /* text-align: center; */

  @media (min-width: 1200px) {
    margin-top: 7vh;
    margin-right: 6vw;
  }
  @media (max-width: 600px) {
    padding: 0 8vw;
  }

  p {
    font-size: larger;
  }
`;

export const aboutImage = css`
  width: 25%;
  margin: 3rem;
  border: 0.2rem solid #ffffff;
  border-radius: 48% 52% 51% 49% / 31% 43% 57% 69%;
  border-radius: 50%;

  @media (min-width: 1200px) {
    margin-left: 4vw;
    margin-top: 10vh;
  }

  Img {
    border-radius: 48% 52% 51% 49% / 31% 43% 57% 69%;
    border-radius: 50%;
  }
`;

export const background = css`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
