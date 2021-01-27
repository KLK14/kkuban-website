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
    <div>
      <FlexContainer css={styles.flexContainer}>
        <div
          css={styles.text}
          dangerouslySetInnerHTML={{ __html: texts.edges[0].node.html }}
        />
        <div>
          <Img
            css={styles.image}
            fluid={workImage.childImageSharp.fluid}
            alt="Work"
          />
        </div>
      </FlexContainer>
      <FlexContainer css={styles.flexContainer}>
        <div
          css={styles.text}
          dangerouslySetInnerHTML={{ __html: texts.edges[1].node.html }}
        />
        <ImageSlider />
      </FlexContainer>
    </div>
  );
};

export const query = graphql`
  query {
    texts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: id, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            id
          }
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
