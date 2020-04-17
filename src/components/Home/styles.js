import styled from 'styled-components';
import theme from '@theme';

export const Container = styled.section`
    max-width: 1000px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 80vh;
    margin: 0px auto;
    padding: 150px 0px;
    margin: 2rem 0;
    font-family: ${theme.fonts.primary};
`;

export const Button = styled.a`
    font-size: 14px;
    padding: 1.25rem 1.75rem;
    margin: 1rem 0;
    font-family: ${theme.fonts.primary};
    border: 1px solid ${theme.colors.teal};
    color: ${theme.colors.teal};
    cursor: pointer;
    background-color: transparent;
    line-height: 1;
    margin-top: 50px;
    border-image: initial;
    border-radius: 3px;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    &:hover {
        background-color: rgba(100, 255, 218, 0.07);
    }

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
