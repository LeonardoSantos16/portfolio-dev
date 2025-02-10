import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 64px;
    background: ${({ theme }) => theme.COLORS.surfaceBackground};
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
    top: 0;
    display: flex;
    align-items: center;
    min-width: 350px;
`
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    width: 100%;
`

export const Logo = styled.h4`
    ${({theme}) => theme.fonts.kalamSmal};
    color: ${({theme}) => theme.COLORS.textPrimary};
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    color: ${({theme}) => theme.COLORS.textPrimary};
    cursor: pointer;
`
