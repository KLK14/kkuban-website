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
  p {
    line-height: 2rem;
  }
  @media (min-width: 1400px) {
    p {
      font-size: 1.2rem;
      line-height: 2.1rem;
    }
    h1 {
      font-size: 3.5rem;
      line-height: 4rem;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
  @media (min-width: 2000px) {
    p {
      font-size: 1.4rem;
      line-height: 2.2rem;
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
