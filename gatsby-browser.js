/** @jsx jsx */
import { Global, css, jsx } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

export const wrapPageElement = ({ element }) => {
  return (
    <div>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css?family=ComicSansMs");
          ${emotionNormalize}
          html,
        body {
            padding: 0;
            margin: 0;
            font-family: "Comic Sans Ms";
          }
        `}
      />
      {element}
    </div>
  );
};
