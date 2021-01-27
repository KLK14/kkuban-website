import { css } from "@emotion/react";
import { colors, textColors } from "./global";

export const header = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 1400;
  color: ${colors.contrastColor};
  height: 100vh;
  margin: 0 4%;
`;

export const textIcon = css`
  margin: 0 1.5rem;
`;
