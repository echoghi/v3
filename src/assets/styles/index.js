import styled, { createGlobalStyle } from 'styled-components';

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
    font-family: var(--font);
    color: var(--white);

    @media (max-width: 767px) {
        margin: 1rem 0;
    }
`;

export const SectionTitle = styled.h1`
    margin-bottom: 5rem;
    display: flex;
    align-items: center;
    font-size: 32px;
    font-family: var(--font);
    color: var(--white);
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
    color: var(--teal);
    margin-right: 0.75rem;
`;

export const Button = styled.a`
    font-size: 14px;
    padding: 1.25rem 1.75rem;
    margin: 1rem 0;
    font-family: var(--font);
    border: 1px solid var(--teal);
    color: var(--teal);
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

export const GlobalStyle = createGlobalStyle`
    :root {
        --dark-blue: #0A192E;
        --light-blue: #172A45;
        --black: #36363c;
        --blue: #269bda;
        --border-grey: rgb(219, 219, 219);
        --error: #dd4b39;
        --grey: #ecf1f6;
        --hover-grey: rgba(0, 0, 0, 0.08);
        --hover-grey-alt: rgb(242, 242, 242);
        --white: rgb(204, 214, 246);
        --whiter: #CCD6F6;
        --teal: rgb(100, 255, 218);

        --font: Josefin Sans, sans-serif, serif;

        --box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -10px;
    }

    * {
        box-sizing: border-box
    }

    html, body {
        font-family: var(--font);
        background: var(--dark-blue);
        box-sizing: border-box;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
 
    a {
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
    }

    h1,
    h2,
    h3,
    h4 {
        margin: 0;
        padding: 0;
        font-weight: bold;
        text-rendering: optimizeLegibility;
    }

    img {
        max-width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
    }

    ul {
        margin-left: 1.45rem;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        list-style-position: outside;
        list-style-image: none;
    }

    p {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
    }

    ul, li {
        margin: 0
    }

    @media (orientation: landscape) {
        /* Track */
        ::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 3px;
        }
    
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: hsl(210deg, 14%, 66%);
            width: 12px;
            border-radius: 5px;
            border: 2px solid hsl(210deg, 15%, 20%)
        }
    }
`;
