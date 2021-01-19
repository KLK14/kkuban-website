import { css } from "@emotion/react";
import { colors, textColors } from "./global";

export const about = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${colors.contrastColor};
  color: ${textColors.textColor};

  & > * {
    flex-basis: 500px;
  }
  /* clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%); */
  /* border-radius: 10% 10% 74% 21% / 0% 0% 45% 45%; */
`;

export const aboutText = css`
  margin: 5rem 3rem;
`;

export const aboutImage = css`
  width: 25%;
  margin: 3rem;
  border: 0.5rem solid;
  border-radius: 50%;

  Img {
    border-radius: 50%;
  }
`;
