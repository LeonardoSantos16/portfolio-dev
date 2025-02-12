import styled from "styled-components";
import media from "../../styles/media-query";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 48px 1.5rem;
    background-color: ${({theme}) => theme.COLORS.surfaceBackground};
    max-width: 1660px;
    margin: 0 auto;

    img{
        width: 244px;
        height: 208px;
        align-self: center;
    }

    ${media.greaterThan('tablet')`
        flex-direction: row-reverse;
        gap: 70px;
        align-items: center;
        justify-content: center;
    `}

    ${media.greaterThan('desktop')`
        gap: 136px;
        img{
            width: 488px;
            height: 417px;
        }
    `}
`
export const ContentHead = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    ${media.greaterThan('tablet')`
        gap: 32px;
    `}
`

export const Title = styled.h1`
    ${({theme}) => theme.fonts.kalamBigger};
    background: linear-gradient(90deg, #9955E8 0%, #7BFFAF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`

export const CTAButtons = styled.div`
    display: flex;
    gap: 1rem;
`