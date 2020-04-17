import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    color: ${theme.colors.white};
`;

export const Text = styled.p`
    font-size: 1rem;
`;

export const Img = styled.img`
    display: flex;
    width: 250px;
    border-radius: 4px;
    margin: 0 auto;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 50% 1fr;

    @media (max-width: 1023px) {
        display: block;
    }
`;

export const Description = styled.div`
    grid-column-start: 1;
`;

export const CaretRight = styled(FontAwesomeIcon)`
    margin: 0 0.75rem;
`;

export const Tech = styled.li`
    font-size: 14px;
    color: ${theme.colors.white};
    padding: 0.25rem 0;
    list-style: none;
`;

export const List = styled(Text)`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;