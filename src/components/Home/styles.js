import styled from 'styled-components';
import theme from '@theme';
import { Section, Button as Box } from '@styles';

export const Container = styled(Section)``;

export const Button = styled(Box)`
    @media (max-width: 767px) {
        margin: 1rem 0;
    }
`;

export const OverLine = styled.h1`
    color: ${theme.colors.teal};
    font-size: 1rem;
    margin-bottom: 1rem;
`;

export const Title = styled.h2`
    color: ${theme.colors.whiter};
    font-size: 5rem;

    @media (max-width: 767px) {
        font-size: 40px;
    }
`;

export const TagLine = styled.h3`
    color: ${theme.colors.white};
    font-size: 3rem;

    @media (max-width: 767px) {
        font-size: 40px;
    }
`;

export const Description = styled.p`
    color: ${theme.colors.white};
    font-size: 1rem;
    line-height: 1.3;
    width: 50%;

    @media (max-width: 767px) {
        width: 100%;
    }
`;
