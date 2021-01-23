/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ImageSlider from "./slider";
import { FlexContainer } from "./../styles/global";
import * as styles from "../styles/projects";

const Projects: React.FunctionComponent = () => {
  const { texts } = useStaticQuery(query);

  return (
    <FlexContainer css={styles.container}>
      <div
        css={styles.text}
        dangerouslySetInnerHTML={{ __html: texts.edges[0].node.html }}
      />
      <div>Placeholder Image Work</div>
      <div
        css={styles.text}
        dangerouslySetInnerHTML={{ __html: texts.edges[1].node.html }}
      />
      <ImageSlider />
    </FlexContainer>
  );
};

export const query = graphql`
  query {
    texts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`;

export default Projects;
