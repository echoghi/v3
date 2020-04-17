import styled from 'styled-components';
import theme from '@theme';
import { Button as Box } from '@styles';

export const Project = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 100px;
    gap: 10px;
`;

export const Button = styled(Box)`
    margin: 1rem auto;
`;

export const ProjectImage = styled.img`
    grid-row: 1 / -1;
    grid-column-end: 13;
    grid-column-start: 6;
    border-radius: 4px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
    position: relative;
    z-index: 1;
    background-color: rgb(100, 255, 218);
`;

export const Description = styled.div`
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
`;

export const TechList = styled.ul`
    display: flex;
    margin: 0;

    li {
        font-size: 12px;
        list-style: none;
        padding: 0 1rem;

        &:first-child {
            padding-left: 0;
        }
    }
`;

export const Icons = styled.div`
    margin: 1rem 0;
`;

export const Name = styled.h5`
    font-size: 28px;
    font-family: Oxygen Mono;
`;

export const Featured = styled.h4`
    font-family: Oxygen Mono;
    font-size: 13px;
    color: ${theme.colors.teal};
    margin-bottom: 0.5rem;
`;

export const Text = styled.p`
    box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
    position: relative;
    z-index: 2;
    background-color: rgb(23, 42, 69);
    color: rgb(168, 178, 209);
    font-size: 1rem;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    padding: 25px;
    border-radius: 3px;
`;
