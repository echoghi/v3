/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import './layout.css';

import styled, { createGlobalStyle } from 'styled-components';
import theme from '../../config/theme';
import Footer from './Footer';

const Container = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0 1.0875rem 1.45rem;
`;

const GlobalStyle = createGlobalStyle`
    html, body {
        font-family:  -apple-system, BlinkMacSystemFont,
        Oxygen Mono, Roboto, Oxygen, Ubuntu, Cantarell,
        Open Sans, 'Helvetica Neue', sans-serif;
        background: ${theme.colors.darkBlue};
        box-sizing: border-box;
    }
`;

// load smooth scroll
if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <GlobalStyle />
            <Header siteTitle={data.site.siteMetadata.title} />
            <Container>
                <main>{children}</main>
            </Container>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
