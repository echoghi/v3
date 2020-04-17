import React from 'react';

import Layout from '../components/layout';
import Home from '../components/Home';
import SEO from '../components/seo';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Home />
        <About />
        <Projects />
        <Contact />
    </Layout>
);

export default IndexPage;
