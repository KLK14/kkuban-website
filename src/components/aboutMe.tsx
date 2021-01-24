/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Wave from "../res/images/wave3.svg";
import * as styles from "../styles/aboutMe";
import { FlexContainer } from "./../styles/global";

const AboutMe: React.FunctionComponent = () => {
  const { imageMe, text } = useStaticQuery(query);

  return (
    <div css={styles.container}>
      <FlexContainer>
        <div css={styles.aboutImage}>
          <Img fluid={imageMe.childImageSharp.fluid} alt="Me" />
        </div>
        <div
          css={styles.aboutText}
          dangerouslySetInnerHTML={{ __html: text.edges[0].node.html }}
        />
      </FlexContainer>
      <Wave css={styles.background} />
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
    text: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/aboutMe/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          html
        }
      }
    }
  }
`;

// const textQuery = graphql`
//   query {
//     allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/home/" } }) {
//       edges {
//         node {
//           html
//         }
//       }
//     }
//   }
// `;

export default AboutMe;
