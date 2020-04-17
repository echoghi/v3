import styled from 'styled-components';
import theme from '@theme';
import { Section, Button as Box } from '@styles';

export const Container = styled(Section)`
    text-align: center;
`;

export const Text = styled.p`
    font-size: 1rem;
    color: ${theme.colors.white};
    width: 30rem;
    margin: 3rem auto;
    width: 80%;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Heading = styled.h1`
    margin: 0 auto;
    font-size: 3rem;
`;

export const Button = styled(Box)`
    margin: 1rem auto;
`;
