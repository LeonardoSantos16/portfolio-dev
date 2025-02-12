import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 48px 1.5rem;
    background-color: ${({theme}) => theme.COLORS.surfaceBackground};
    img{
        width: 244px;
        height: 208px;
        align-self: center;
    }
`

export const Title = styled.h1`
    ${({theme}) => theme.fonts.kalamBigger};
    background: linear-gradient(90deg, #9955E8 0%, #7BFFAF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`

export const Role = styled.h2`
    ${({ theme }) => theme.fonts.heeboBig};
    color: ${({ theme }) => theme.COLORS.textPrimary};
`

export const Description = styled.p`
    ${({ theme }) => theme.fonts.heeboSmall};
    color:  ${({ theme }) => theme.COLORS.textSecondary};
`

export const CTAButtons = styled.div`
    display: flex;
    gap: 1rem;
`