import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`
    *{
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    body{
        width: 100%;
        -webkit-font-smoothing: antialiased;
        min-width: 350px;
    }
`