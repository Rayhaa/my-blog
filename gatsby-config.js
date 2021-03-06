module.exports = {
  siteMetadata: {
    title: `CODEINSTANT`,
    description: `realize your dream, don't forget to rehaban and keep sans `,
    author: `@Rayha`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
   {
     resolve: `gatsby-plugin-mdx`,
     options: {
       extensions: [".mdx", ".md"],
       gatsbyRemarkPlugins: [{
           resolve: `gatsby-remark-images`,
           options: {
             maxWidth: 590,
           },
         },
         {
           resolve: `gatsby-remark-responsive-iframe`,
           options: {
             wrapperStyle: `margin-bottom: 1.0725rem`,
           },
         },
         `gatsby-remark-prismjs`,
         `gatsby-remark-copy-linked-files`,
         `gatsby-remark-smartypants`,
       ],
     },
   },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
