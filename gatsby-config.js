module.exports = {
  siteMetadata: {
    title: "My Super Cool Blog",
	author: 'Brendan Biggs',
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
	"gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    "gatsby-plugin-mdx",
	{
		resolve: "gatsby-source-graphql",
		options: {
			typeName: "drupal",
			fieldName: "Drupal",
			url: "https://csc496f22demo.tldr.dev/graphql"
		}
	}
  ],
};