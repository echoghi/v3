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

    html, body {
        font-family: var(--font);
        background: var(--dark-blue);
        box-sizing: border-box;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    menu,
    nav,
    section,
    summary {
        display: block;
    }
    audio,
    canvas,
    progress,
    video {
        display: inline-block;
    }
    a {
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
    }
    a:active,
    a:hover {
        outline-width: 0;
    }


    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }
    img {
        border-style: none;
    }
    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
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
    h1 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 2.25rem;
        line-height: 1.1;
    }
    h2 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 1.62671rem;
        line-height: 1.1;
    }
    h3 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 1.38316rem;
        line-height: 1.1;
    }
    h4 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 1rem;
        line-height: 1.1;
    }
    h5 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 0.85028rem;
        line-height: 1.1;
    }
    h6 {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
        color: inherit;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        font-size: 0.78405rem;
        line-height: 1.1;
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
    ol {
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

    hr {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: calc(1.45rem - 1px);
        background: hsla(0, 0%, 0%, 0.2);
        border: none;
        height: 1px;
    }

    b {
        font-weight: bold;
    }
    strong {
        font-weight: bold;
    }
    dt {
        font-weight: bold;
    }
    th {
        font-weight: bold;
    }
    li {
        margin-bottom: calc(1.45rem / 2);
    }
    ol li {
        padding-left: 0;
    }
    ul li {
        padding-left: 0;
    }
    li > ol {
        margin-left: 1.45rem;
        margin-bottom: calc(1.45rem / 2);
        margin-top: calc(1.45rem / 2);
    }
    li > ul {
        margin-left: 1.45rem;
        margin-bottom: calc(1.45rem / 2);
        margin-top: calc(1.45rem / 2);
    }
    blockquote *:last-child {
        margin-bottom: 0;
    }
    li *:last-child {
        margin-bottom: 0;
    }
    p *:last-child {
        margin-bottom: 0;
    }
    li > p {
        margin-bottom: calc(1.45rem / 2);
    }


    @media only screen and (max-width: 480px) {
        html {
            font-size: 100%;
        }
    }

    ul, li {
        margin: 0
    }
`;
