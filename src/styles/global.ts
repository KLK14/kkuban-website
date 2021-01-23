import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const colors = {
  backgroundColor: "white",
  contrastColor: "#5b1a1a",
};

export const textColors = {
  textColor: colors.backgroundColor,
  textColorContrast: colors.contrastColor,
};

export const main = css`
  font-family: "Comic Sans MS";
  /* background-color: #f9f9f9; */
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  & > * {
    flex-basis: 500px;
  }
`;
