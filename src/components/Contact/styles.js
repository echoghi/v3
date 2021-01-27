import styled from 'styled-components';

import { Section, Button as Box } from '@styles';

export const Container = styled(Section)`
    text-align: center;
`;

export const Text = styled.p`
    font-size: 1.3rem;
    color: var(--white);
    width: 30rem;
    margin: 3rem auto;
    width: 80%;

    @media (max-width: 767px) {
        width: 100%;
        font-size: 1.1rem;
    }
`;

export const Heading = styled.h1`
    margin: 0 auto;
    font-size: 3rem;
`;

export const Button = styled(Box)`
    margin: 1rem auto;
`;
