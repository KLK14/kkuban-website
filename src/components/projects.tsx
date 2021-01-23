/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import ImageSlider from "./slider";
import { FlexContainer } from "./../styles/global";

const Projects: React.FunctionComponent = () => {
  return (
    <FlexContainer>
      <div>
        <h1>Project</h1>
        <p>...</p>
      </div>
      <ImageSlider />
    </FlexContainer>
  );
};

export default Projects;
