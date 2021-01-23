import { css } from "@emotion/react";
import { colors, textColors } from "./global";
// import wave from "../images/wave.svg";s

export const container = css`
  margin-bottom: 30vh;
  /* background-image: linear-gradient(to left, #e1415f, #5b1a1a); */
  color: ${textColors.textColor};
`;

export const aboutText = css`
  margin: 5rem 3rem;
`;

export const aboutImage = css`
  width: 25%;
  margin: 3rem;
  border: 0.5rem solid;
  border-radius: 48% 52% 51% 49% / 31% 43% 57% 69%;
  border-radius: 50%;

  Img {
    border-radius: 48% 52% 51% 49% / 31% 43% 57% 69%;
    border-radius: 50%;
  }
`;

export const background = css`
  position: absolute;
  width: 100%;
  height: 60%;
  z-index: -1;

  @media (max-width: 500px) {
    height: 150%;
  }
`;
