import styled from "@emotion/styled";

export const colors = {
  backgroundColor: "white",
  contrastColor: "#69070f",
};

export const textColors = {
  textColor: colors.backgroundColor,
  textColorContrast: colors.contrastColor,
};

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > * {
    flex-basis: 500px;
  }
`;
