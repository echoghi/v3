import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Text = styled.p`
    font-size: 1.3rem;
    line-height: 1.2;

    @media (max-width: 1023px) {
        font-size: 1.2rem;
    }
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
    color: var(--white);
    padding: 0.25rem 0;
    list-style: none;
    margin: 0;
`;

export const List = styled(Text)`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
