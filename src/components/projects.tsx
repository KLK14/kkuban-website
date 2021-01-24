/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import ImageSlider from "./slider";
import { FlexContainer } from "./../styles/global";
import * as styles from "../styles/projects";

const Projects: React.FunctionComponent = () => {
  const { texts, workImage } = useStaticQuery(query);

  return (
    <FlexContainer css={styles.container}>
      <div
        css={styles.text}
        dangerouslySetInnerHTML={{ __html: texts.edges[0].node.html }}
      />
      <Img fluid={workImage.childImageSharp.fluid} alt="Work" />
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
    workImage: file(relativePath: { eq: "work2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Projects;
