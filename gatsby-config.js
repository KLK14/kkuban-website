module.exports = {
  siteMetadata: {
    title: "KKuban",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-typescript",
    // "gatsby-plugin-ts",
    // {
    //   resolve: `gatsby-plugin-ts`,
    //   options: {
    //     tsLoader: {
    //       logLevel: "warn",
    //     },
    //     forkTsCheckerPlugin: {
    //       eslint: true,
    //     },
    //     fileName: `types/graphql-types.ts`,
    //     codegen: true,
    //     codegenDelay: 250,
    //     alwaysCheck: false,
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
