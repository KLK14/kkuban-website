import { css } from "@emotion/react";
import { colors } from "./global";

export const container = css`
  background-image: linear-gradient(
    to bottom,
    #e1415f,
    ${colors.contrastColor}
  );

  @media (min-width: 1200px) {
    background-image: linear-gradient(
      to left,
      #e1415f,
      ${colors.contrastColor}
    );
  }
`;

export const footerItems = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -10vw 0;
  color: ${colors.backgroundColor};
`;

export const icon = css`
  width: 10vw;
  height: 10vw;
  max-width: 75px;
  min-height: 55px;
  margin: 0 0.8rem;
  color: #ffffff;

  :hover {
    color: ${colors.contrastColor};
  }
`;

export const text = css`
  text-align: center;
`;

export const textIcon = css`
  margin: 0 0.2rem;
`;
