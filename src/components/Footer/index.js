import React from 'react';
import styled from 'styled-components';
import theme from '@theme';
import HitCounter from '../HitCounter';

const Container = styled.footer`
    margin: 0 auto;
    padding: 1.5rem 0;
    text-align: center;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
    background: #020c1b;
`;

const Attribution = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0 10px;
`;

const Footer = () => {
    return (
        <Container>
            <HitCounter />
            <Attribution>© {new Date().getFullYear()} Emile Choghi</Attribution>
        </Container>
    );
};

export default Footer;
