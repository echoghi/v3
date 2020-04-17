import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Home from '../components/Home';
import SEO from '../components/seo';
import About from '../components/About';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Home />
        <About />
    </Layout>
);

export default IndexPage;
