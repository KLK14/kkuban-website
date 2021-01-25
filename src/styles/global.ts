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
  height: 100vh;
  font-family: "Comic Sans MS";
  line-height: 2rem;
  @media (min-width: 1200px) {
    p {
      font-size: 1.5rem;
      line-height: 2.2rem;
    }
    h1 {
      font-size: 3.5rem;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  & > * {
    flex-basis: 500px;
  }
`;
