import styled from 'styled-components';
import { Link as NavLink } from 'gatsby';
import theme from '../../../config/theme';

export const Nav = styled.header`
    background: ${theme.colors.darkBlue};
    box-shadow: ${props =>
        props.scrollDirection === 'up' ? theme.boxShadow : 'none'};
    position: fixed;
    top: 0;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: translateY(
        ${props => (props.scrollDirection === 'down' ? `-70px` : '0px')}
    );
    height: ${props => (props.scrollDirection === 'none' ? '100px' : '70px')};
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 99;
    font-family: ${theme.fonts.primary};
    padding: 0 1rem;

    @media (max-width: 1023px) {
        padding: 0;
    }
`;

export const Container = styled.div`
    display: none;
    width: 30px;

    @media (max-width: 767px) {
        display: block;
        position: absolute;
        top: 30%;
        right: 30px;
        -webkit-tap-highlight-color: transparent;
        z-index: 2;
    }

    div {
        &:first-child {
            top: ${props => (props.open ? '10.5px' : null)};
            transform: ${props => (props.open ? 'rotate(315deg)' : 'none')};
        }

        &:nth-child(2) {
            display: ${props => (props.open ? 'none' : 'block')};
            width: 65%;
        }

        &:last-child {
            top: ${props => (props.open ? '10.5px' : null)};
            transform: ${props =>
                props.open ? 'rotate(-315deg) translateY(-14px)' : 'none'};
            right: ${props => (props.open ? '10px' : null)};
        }
    }
`;

export const Line = styled.div`
    position: relative;
    margin: 7px 0;
    height: 3px;
    background: ${theme.colors.teal};
    border-radius: 5px;
    transition: all 300ms ease-out;
`;

export const Number = styled.span`
    padding: 0 1rem;
    color: ${theme.colors.teal};
    transition: all 300ms ease-out;
`;

export const NavBrand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;

    a {
        color: ${theme.colors.white};
    }
`;

export const Link = styled(NavLink)`
    font-size: 14px;
    padding: 8px 16px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    text-decoration: none;
    border-radius: 2px;
    background-color: transparent;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    outline: none;
    line-height: 1;
    color: ${theme.colors.white};

    span {
        text-transform: none;
    }

    svg {
        display: none;
    }

    &:hover {
        color: ${theme.colors.teal};
    }

    @media (max-width: 767px) {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0.5rem;
        text-align: left;

        svg {
            display: flex;
        }

        &:first-child {
            margin-top: 115px;
        }
    }
`;

export const ExternalLink = styled.a`
    font-size: 14px;
    padding: 1rem;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    text-decoration: none;
    border-radius: 2px;
    background-color: transparent;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    outline: none;
    line-height: 1;
    color: ${theme.colors.white};

    span {
        text-transform: none;
    }

    svg {
        display: none;
    }

    &:hover {
        color: ${theme.colors.teal};
    }

    @media (max-width: 767px) {
        display: flex;
        justify-content: space-between;
        padding: 20px 10px;

        svg {
            display: flex;
        }

        &:first-child {
            padding: 30px 10px;
        }

        &:nth-child(2) {
            padding-top: 30px;
        }
    }
`;

export const Links = styled.ul`
    display: flex;
    font-size: 18px;
    margin: 0;
    padding: 0 1rem;
    justify-content: center;
    align-items: center;
    align-content: center;
    list-style: none;

    @media (max-width: 767px) {
        height: 100vh;
        width: 75vw;
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        margin: 0;
        -webkit-tap-highlight-color: transparent;
        box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);
        background: ${theme.colors.lightBlue};
        text-align: center;
        transform: ${props => (props.open ? 'scaleX(1)' : 'scaleX(0)')};
        transition: ${props =>
            props.open
                ? 'transform 0.3s cubic-bezier(0.01, 0.03, 0.29, 1.17), opacity 0.2s'
                : 'transform 0.1s cubic-bezier(0.71, 0.02, 0.9, 0.23), opacity 0.1s'};
        transform-origin: right;
    }
`;
