import styled from 'styled-components';

import { Section, Button as Box } from '@styles';

export const Container = styled(Section)``;

export const Button = styled(Box)`
    @media (max-width: 767px) {
        margin: 1rem 0;
    }
`;

export const OverLine = styled.h1`
    font-family: var(--font);
    color: var(--teal);
    font-size: 1.2rem;
    margin-bottom: 1rem;
`;

export const Title = styled.h2`
    font-family: var(--font);
    color: var(--whiter);
    font-size: 5rem;
    margin: 0;

    @media (max-width: 767px) {
        font-size: 40px;
    }
`;

export const TagLine = styled.h3`
    color: var(--white);
    font-size: 3rem;

    @media (max-width: 767px) {
        font-size: 40px;
    }
`;

export const Description = styled.p`
    color: var(--white);
    font-size: 1.3rem;
    line-height: 1.3;
    width: 50%;
    margin-top: 1rem;

    @media (max-width: 767px) {
        width: 100%;
    }
`;
