import { css } from "@emotion/react";
import { colors, textColors } from "./global";

export const text = css`
  display: flex;
  align-items: center;
`;

export const container = css`
  & > * {
    width: 50%;
  }
`;
