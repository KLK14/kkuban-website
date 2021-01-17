import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img, { FluidObject, GatsbyImageFluidProps } from "gatsby-image";

const AboutMe: React.FunctionComponent = () => {
  const { file } = useStaticQuery<{
    file: { childImageSharp: GatsbyImageFluidProps };
  }>(query);

  return (
    <div className="about">
      <div className="about-image">
        <Img fluid={file.childImageSharp.fluid} alt="Me" />
      </div>
      <div className="about-text">
        <h1>About Me</h1>
        <p>I am ....</p>
      </div>
    </div>
  );
};

export const query = graphql`
  query ImageQuery {
    file(relativePath: { eq: "profilTest.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutMe;
