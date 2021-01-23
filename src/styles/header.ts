import { css } from "@emotion/react";
import { colors, textColors } from "./global";

export const header = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.contrastColor};
  height: 100vh;
`;

export const headerTitle = css`
  font-size: 4vh;
`;