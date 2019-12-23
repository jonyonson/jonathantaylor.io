module.exports = {
  siteMetadata: {
    title: 'jonathantaylor.io',
    author: 'Jonathan Taylor',
    description: "Jonathan Taylor's blog and portfolio",
    siteUrl: 'https://jonathantaylor.io/',
    social: {
      twitter: 'jonyonson',
      github: 'jonyonson',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        extendsions: ['.mdx', '.md'],
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 670,
            },
          },
          'gatsby-remark-embed-video',
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          { resolve: 'gatsby-remark-prismjs' },
          { resolve: 'gatsby-remark-copy-linked-files' },
          { resove: 'gatsby-remark-smartypants' },
        ],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-69543893-1',
      },
    },
    'gatsby-plugin-feed',
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    'gatsby-plugin-mdx',
  ],
};
