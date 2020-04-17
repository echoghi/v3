const config = require('./config/website');
const theme = require('./config/theme');

module.exports = {
    siteMetadata: {
        siteUrl: config.siteUrl,
        title: config.siteTitle,
        twitterHandle: config.twitterHandle,
        description: config.siteDescription,
        keywords: config.keywords,
        canonicalUrl: config.siteUrl,
        image: config.siteLogo,
        author: {
            name: config.author,
            minibio: config.minibio
        },
        organization: {
            name: config.organization,
            url: config.siteUrl,
            logo: config.siteLogo
        },
        social: {
            twitter: config.twitterHandle,
            fbAppID: ''
        }
    },

    plugins: [
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-styled-components',
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: config.googleAnalyticsID
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Josefin Sans`],
                display: 'swap'
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: config.siteTitle,
                short_name: config.siteTitle,
                start_url: `/`,
                background_color: theme.colors.darkBlue,
                theme_color: theme.colors.darkBlue,
                display: 'minimal-ui',
                icon: 'src/images/favicon.png'
            }
        }
    ]
};
