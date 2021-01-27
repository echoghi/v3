import styled from 'styled-components';
import { Link as NavLink } from 'gatsby';

import { Button as Box } from '@styles';

export const Nav = styled.header`
    background: var(--dark-blue);
    box-shadow: ${(props) =>
        props.scrollDirection === 'up' && props.position.y !== 0
            ? 'var(--box-shadow)'
            : 'none'};
    position: fixed;
    top: 0;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: translateY(
        ${(props) => (props.scrollDirection === 'down' ? `-70px` : '0px')}
    );
    height: ${(props) =>
        props.scrollDirection === 'none' ||
        (props.scrollDirection === 'up' && props.position.y === 0)
            ? '100px'
            : '70px'};
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 99;
    font-family: var(--font);
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
            top: ${(props) => (props.open ? '10.5px' : null)};
            transform: ${(props) => (props.open ? 'rotate(315deg)' : 'none')};
        }

        &:nth-child(2) {
            display: ${(props) => (props.open ? 'none' : 'block')};
            width: 65%;
        }

        &:last-child {
            top: ${(props) => (props.open ? '10.5px' : null)};
            transform: ${(props) =>
                props.open ? 'rotate(-315deg) translateY(-14px)' : 'none'};
            right: ${(props) => (props.open ? '10px' : null)};
        }
    }
`;

export const Line = styled.div`
    position: relative;
    margin: 7px 0;
    height: 3px;
    background: var(--teal);
    border-radius: 5px;
    transition: all 300ms ease-out;
`;

export const Number = styled.span`
    padding: 0 1rem;
    color: var(--teal);
    transition: all 300ms ease-out;
`;

export const NavBrand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;

    @media (max-width: 767px) {
        padding: 0 1.45rem;
    }

    a {
        color: var(--white);
    }
`;

export const Button = styled(Box)`
    padding: 0.75rem 1rem;
    margin: 1rem 0;
    margin-left: 0.5rem;

    @media (max-width: 767px) {
        margin: 2rem auto;
        display: flex;
        position: relative;
        width: 85%;
        width: fit-content;
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
    color: ${(props) => (!!props.active ? 'var(--teal)' : 'var(--white)')};
    font-family: var(--font);

    span {
        text-transform: none;
    }

    svg {
        display: none;
    }

    &:hover {
        color: var(--teal);
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
    color: var(--white);

    span {
        text-transform: none;
    }

    svg {
        display: none;
    }

    &:hover {
        color: var(--teal);
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
        background: var(--light-blue);
        text-align: center;
        transform: translateX(${(props) => (props.open ? '0px' : '76vw')});
        transition: transform 0.2s ease;
        transform-origin: right;
    }
`;
