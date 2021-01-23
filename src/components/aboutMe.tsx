/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Wave from "../images/wave.svg";

import * as styles from "../styles/aboutMe";
import { FlexContainer } from "./../styles/global";

const AboutMe: React.FunctionComponent = () => {
  const { imageMe, backPath } = useStaticQuery(query);

  return (
    <div>
      <Wave css={styles.background} />
      <FlexContainer css={styles.container}>
        <div css={styles.aboutImage}>
          <Img fluid={imageMe.childImageSharp.fluid} alt="Me" />
        </div>
        <div css={styles.aboutText}>
          <h1>About Me</h1>
          <p>I am ....</p>
        </div>
      </FlexContainer>
    </div>
  );
};

const query = graphql`
  query {
    imageMe: file(relativePath: { eq: "profil.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    backPath: file(relativePath: { eq: "wave.svg" }) {
      publicURL
    }
  }
`;

export default AboutMe;
