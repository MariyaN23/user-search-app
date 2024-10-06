import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: ${theme.colors.font};
        margin: 0;
        line-height: 1.2;

        min-width: 360px;
    }

    button {
        border: none;
        cursor: pointer;
    }
`