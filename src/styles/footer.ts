import { css } from "@emotion/react";
import { colors } from "./global";

export const background = css`
  position: absolute;
  top: 0;
  width: 100%;
`;

export const container = css`
  position: absolute;
  margin-top: 10vh;
  height: 15rem;
  min-height: 25vw;
  width: 100%;

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

export const flexContainer = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
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
  align-self: stretch;
  text-align: center;
`;

export const textIcon = css`
  margin: 0 0.2rem;
`;
