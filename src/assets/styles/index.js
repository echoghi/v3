import styled from 'styled-components';
import theme from '@theme';

export const Section = styled.section`
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
    color: ${theme.colors.white};
`;

export const SectionTitle = styled.h1`
    margin-bottom: 5rem;
    display: flex;
    align-items: center;
    font-size: 32px;
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.white};
    width: 100%;

    &:after {
        content: '';
        display: block;
        height: 1px;
        width: 300px;
        background-color: rgb(45, 57, 82);
        position: relative;
        margin-left: 20px;

        @media (max-width: 767px) {
            width: 150px;
        }
    }

    @media (max-width: 767px) {
        font-size: 20px;
    }
`;

export const SectionNumber = styled.div`
    color: ${theme.colors.teal};
    margin-right: 0.75rem;
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
`;
