/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
    // Set up a fake loader for the scrollreveal module which kept throwing errors in SSR despite the "typeof window" check
    if (stage === 'build-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /scrollreveal/,
                        use: loaders.null()
                    }
                ]
            },
            resolve: {
                alias: {
                    '@theme': path.resolve(__dirname, 'config/theme'),
                    '@config': path.resolve(__dirname, 'config/website'),
                    '@styles': path.resolve(__dirname, 'src/assets/styles'),
                    '@lib': path.resolve(__dirname, 'src/lib'),
                    '@images': path.resolve(__dirname, 'src/images')
                }
            }
        });
    } else {
        actions.setWebpackConfig({
            resolve: {
                alias: {
                    '@theme': path.resolve(__dirname, 'config/theme'),
                    '@config': path.resolve(__dirname, 'config/website'),
                    '@styles': path.resolve(__dirname, 'src/assets/styles'),
                    '@lib': path.resolve(__dirname, 'src/lib'),
                    '@images': path.resolve(__dirname, 'src/images')
                }
            }
        });
    }
};
