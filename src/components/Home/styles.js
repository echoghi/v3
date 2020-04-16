import styled from 'styled-components';
import theme from '../../../config/theme';

export const Container = styled.section`
    max-width: 1000px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 80vh;
    margin: 0px auto;
    padding: 150px 0px;

    @media (max-width: 767px) {
        padding-top: 100px;
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
    width: 50%;

    @media (max-width: 767px) {
        width: 100%;
    }
`;
