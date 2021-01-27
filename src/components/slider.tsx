/** @jsx jsx */
import { jsx, SerializedStyles } from "@emotion/react";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img, { GatsbyImageFluidProps } from "gatsby-image";
import * as styles from "./../styles/slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider: React.FunctionComponent = () => {
  const { gamePics } = useStaticQuery<{
    gamePics: {
      nodes: {
        relativePath: string;
        childImageSharp: GatsbyImageFluidProps;
      }[];
    };
  }>(query);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    fade: true,
    pauseOnDotsHover: true,
    speed: 500,
  };

  return (
    <div css={styles.imageContainer}>
      <Slider {...settings}>
        {gamePics.nodes.map((pic, index) => (
          <Img
            css={styles.image}
            fluid={pic.childImageSharp.fluid}
            key={index.toString()}
          />
        ))}
      </Slider>
    </div>
  );
};

export const query = graphql`
  query {
    gamePics: allFile(filter: { relativeDirectory: { eq: "game" } }) {
      nodes {
        relativePath
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default ImageSlider;
