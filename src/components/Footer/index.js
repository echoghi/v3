import React from 'react';
import styled from 'styled-components';
import theme from '@theme';

const Container = styled.footer`
    margin: 0 auto;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    text-align: center;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
    background: #020c1b;
`;

const Footer = () => {
    return <Container>© {new Date().getFullYear()} Emile Choghi</Container>;
};

export default Footer;
