import { css } from "@emotion/react";
import { colors, textColors } from "./global";

export const text = css`
  line-height: 28px;

  a {
    color: ${colors.contrastColor};
  }

  @media (min-width: 1200px) {
    p {
      width: 80%;
      margin: auto;
    }
  }
`;

export const image = css`
  @media (min-width: 1200px) {
    width: 70%;
    margin: auto;
  }
`;

export const flexContainer = css`
  border: 1px solid #c9b1b1;
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-bottom: 5vh;
  align-items: center;

  @media (min-width: 1200px) {
    margin-left: 2%;
    margin-right: 2%;
  }

  & > * {
    min-width: 45%;

    @media (min-width: 1200px) {
      max-width: 50%;
    }
  }
`;
