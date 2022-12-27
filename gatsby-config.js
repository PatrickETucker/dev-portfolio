module.exports = {
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-theme-portfolio-minimal',
      options: {
        siteUrl: 'https://www.patricketucker.com/', // Used for sitemap generation
        manifestSettings: {
          favicon: './content/images/favicon.png', // Path is relative to the root
          siteName: "Patrick Tucker's Portfolio", // Used in manifest.json
          shortName: 'Portfolio', // Used in manifest.json
          startUrl: '/', // Used in manifest.json
          backgroundColor: '#FFFFFF', // Used in manifest.json
          themeColor: '#000000', // Used in manifest.json
          display: 'minimal-ui', // Used in manifest.json
        },
        contentDirectory: './content',
        blogSettings: {
          path: '/projects', // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
  ],
};
