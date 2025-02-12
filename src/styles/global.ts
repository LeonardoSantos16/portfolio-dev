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
        background-color: ${({theme}) => theme.COLORS.surfaceBackground};

    }

    span{
        ${({theme}) => theme.fonts.kalamSmal};
        color:  ${({theme}) => theme.COLORS.secondaryColor};
    }

    h2{
        ${({ theme }) => theme.fonts.heeboBig};
        color: ${({ theme }) => theme.COLORS.textPrimary};
    }

    p{
        ${({ theme }) => theme.fonts.heeboSmall};
        color:  ${({ theme }) => theme.COLORS.textSecondary};
    }

`