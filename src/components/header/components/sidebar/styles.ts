import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1rem;
    align-items: flex-end;
    gap: 1.5rem;
    width: 280px;
    height: 736px;
    right: 0px;
    top: 64px;
    background: ${({theme}) => theme.COLORS.surfacePrimary};
    height: 100vh;
`
