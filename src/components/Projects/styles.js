import styled from 'styled-components';

import { Button as Box } from '@styles';

export const Project = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 120px;
    gap: 10px;

    @media (max-width: 767px) {
        display: block;
    }
`;

export const Button = styled(Box)`
    margin: 1rem auto;
`;

export const ProjectLink = styled.a`
    padding: 0 10px;
`;

export const ProjectImage = styled.img`
    grid-row: 1 / -1;
    grid-column: ${(props) => (props.left ? '1 / 8' : '6 / 13')};
    border-radius: 4px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
    position: relative;
    z-index: 1;

    @media (max-width: 767px) {
        grid-column: 1 / -1;

        background-color: var(--teal);
    }
`;

export const Description = styled.div`
    position: relative;
    grid-column: ${(props) => (props.right ? '7 / 13' : '1 / 7')};
    text-align: ${(props) => (props.right ? 'right' : 'left')};
    grid-row: 1 / -1;

    @media (max-width: 767px) {
        grid-column: 1 / 7;
        text-align: left;
        grid-column: 1 / -1;
    }
`;

export const TechList = styled.ul`
    display: flex;
    margin: 0;
    justify-content: ${(props) => (props.right ? 'flex-end' : 'flex-start')};

    li {
        font-size: 12px;
        list-style: none;
        padding: 0 1rem;
    }

    @media (max-width: 767px) {
        justify-content: flex-start;
        margin: 0;
        li {
            padding: 0 0.5rem;
        }
    }
`;

export const Icons = styled.div`
    margin: 1rem 0;
`;

export const Name = styled.h5`
    font-size: 28px;
    font-family: var(--font);
    margin: 0;
    margin-bottom: 1.45rem;

    @media (max-width: 767px) {
        font-size: 22px;
        margin-bottom: 0;
    }
`;

export const Featured = styled.h4`
    font-family: var(--font);
    font-size: 13px;
    color: var(--teal);
    margin-bottom: 0.5rem;
`;

export const Text = styled.p`
    box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
    position: relative;
    z-index: 2;
    color: #a8b2d1;
    background-color: rgb(23, 42, 69);
    color: rgb(168, 178, 209);
    font-size: 1.2rem;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    padding: 25px;
    border-radius: 3px;

    @media (max-width: 767px) {
        background-color: transparent;
        padding: 5px 0;
    }
`;
