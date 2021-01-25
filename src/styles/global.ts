import styled from "@emotion/styled";
import { css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

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
  @media (min-width: 1200px) {
    p {
      font-size: 1.5rem;
      line-height: 2.2rem;
    }
    h1 {
      font-size: 3.5rem;
      line-height: 4rem;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
`;

export const global = css`
  ${emotionNormalize}
  html,
  body {
    padding: 0;
    margin: 0;
    /* min-height: 100%; */
    font-family: "Comic Sans MS";
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
