import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --light: #fcfcfd;
        --dark: #3c3e43;

        --main-bg: #a9b0bb;
        --title: #7b7e84;

        --dark-switcher: #1c1c1e;
    }

    body {
        font-family: 'Outfit', sans-serif;
        font-size: 16px;
        background-color: var(--main-bg);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;