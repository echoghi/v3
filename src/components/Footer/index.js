import React from 'react';
import styled from 'styled-components';
import theme from '@theme';

const Container = styled.footer`
    margin: 0 auto;
    max-width: 960px;
    padding: 1rem 0;
    text-align: center;
    color: ${theme.colors.white};
`;

const Footer = () => {
    return <Container>© {new Date().getFullYear()} Emile Choghi</Container>;
};

export default Footer;
