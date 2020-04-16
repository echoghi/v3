const config = require('./config/website');

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
            minibio: config.minibio,
        },
        organization: {
            name: config.organization,
            url: config.siteUrl,
            logo: config.siteLogo,
        },
        social: {
            twitter: config.twitterHandle,
            fbAppID: '',
        },
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-styled-components',
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`source sans pro`],
                display: 'swap',
            },
        },
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
                name: config.siteTitle,
                short_name: config.siteTitle,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `standalone`,
                icon: 'src/images/favicon.png',
            },
        },
    ],
};
