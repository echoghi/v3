import styled from 'styled-components';

export const Container = styled.footer`
    margin: 0 auto;
    padding: 1.5rem 0;
    text-align: center;
    color: var(--white);
    font-family: var(--font);
`;

export const Attribution = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0 10px;
`;

export const SocialContainer = styled.ul`
    margin: 0;
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 48px;
    right: auto;
    z-index: 10;
    color: rgb(168, 178, 209);
    list-style: none;

    &:after {
        content: '';
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        background: var(--white);
    }

    @media (max-width: 1023px) {
        margin: 20px 0;
        display: flex;
        position: relative;
        justify-content: center;
        width: 100%;
        left: auto;
        right: auto;

        &:after {
            display: none;
        }
    }
`;

export const SocialListItem = styled.li`
    margin: 20px 0;

    @media (max-width: 1023px) {
        margin: 0 15px;
    }
`;

export const SocialLink = styled.a`
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    display: inline-block;
    cursor: pointer;

    &:hover,
    &:focus {
        transform: translateY(-3px);

        svg {
            color: #64ffda !important;
        }
    }
`;
