import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;

    --green: #33CC95;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFFF;
    --input: #E7E9EE;
}

h1,h2,h3,h4,h5,h6, strong {
    font-weight: 600;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

* {
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
    text-align: left;
    border: 0;
    color: #23292e;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: var(--background);
}

button {
    background: transparent;
    cursor: pointer;
}

img {
    display: block;
    max-width: 100%;
}

html {
    font-size: 62.5%;

    @media(max-width: 720px) {
        font-size: 87.5%;
    }
}

html,
body {
    overflow-x: hidden;
}

input,
button,
textarea {
    appearance: none;
}

.container {
    width: 124.3rem;
    padding: 0 1.5rem;
    margin: 0 auto;
    @media(max-width: 1200px) {
        width: 100%;
        padding: 0px 2.4rem;
    }
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay {
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content {
    width:100%;
    max-width: 57.6rem;
    background-color: var(--background);
    padding: 4.8rem;
    position: relative;
    border-radius: 0.5rem;
}

.react-modal-close {
    position: absolute;
    right: 2.1rem;
    top: 2.1rem;
    background-color: transparent;
    transition: filter .2s;

    &:hover {
        filter: brightness(0.8);
    }
}
`;