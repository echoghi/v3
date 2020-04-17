/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@theme': path.resolve(__dirname, 'config/theme'),
                '@config': path.resolve(__dirname, 'config/website')
            }
        }
    });
};
