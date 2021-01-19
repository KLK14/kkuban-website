/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import * as styles from "../styles/aboutMe";
import { useStaticQuery, graphql } from "gatsby";
import Img, { FluidObject, GatsbyImageFluidProps } from "gatsby-image";

const AboutMe: React.FunctionComponent = () => {
  const { file } = useStaticQuery<{
    file: { childImageSharp: GatsbyImageFluidProps };
  }>(query);

  return (
    <div css={styles.about}>
      <div css={styles.aboutImage}>
        <Img fluid={file.childImageSharp.fluid} alt="Me" />
      </div>
      <div css={styles.aboutText}>
        <h1>About Me</h1>
        <p>I am ....</p>
      </div>
    </div>
  );
};

export const query = graphql`
  query ImageQuery {
    file(relativePath: { eq: "profil.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutMe;
