const path = require('path')


/* ENV */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})


module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description:
    `
      Kick off your next, great Gatsby project
      with this default starter. 
      This barebones starter ships with the main 
      Gatsby configuration files you might need.
    `,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
          implementation: require('sass')
      }, 
    },
      {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.GATSBY_CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.GATSBY_CONTENTFUL_CONTENT_DELIVERY_API}`,
      },
    },
     {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.GATSBY_FIREBASE_API_KEY,
          authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
          projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
          storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
          messagingSenderId:process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_FIREBASE_APP_ID
        }
      }
    },
    { 
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        assets: path.join(__dirname, 'src/assets'),
        containers: path.join(__dirname, 'src/containers'),
        static: path.join(__dirname, 'static')
      }
    }   
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
