module.exports = {
  siteMetadata: {
    title: "Site de prezentare Dimension - WebsiteMarket",
    author: "WebsiteMarket.ro",
    description: "Site de prezentare construit in GatsbyJS. Un produs WebsiteMarket.",
    siteUrl: `https://site-prezentare-dimension.websitemarket.ro/`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
  ],
}
