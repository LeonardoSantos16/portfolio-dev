import styled from "styled-components";
import media from "../../styles/media-query";

export const Container = styled.div`
    display: flex;
    padding: 48px 24px;
    flex-direction: column;
    gap: 48px;
    max-width: 1660px;
    background-color: ${({theme}) => theme.COLORS.surfacePrimary};


    ${media.greaterThan('tablet')`
        flex-direction: row;
        padding: 48px 32px;
        margin: 40px 20px;
        gap: 70px;
        align-items: center;
        justify-content: space-between;
        border-radius: 16px;
    `}

    ${media.greaterThan('desktop')`
        gap: 136px;
        padding: 48px 72px;
    
    `}
`

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    gap: 8px;
    img{
        width: 160px;
        height: 160px;
        margin-bottom: 32px;
    }
`

export const Socials = styled.div`
    display: flex;
    gap: 8px;
`

export const ButtonSocial = styled.button`
    padding: 0.75rem;
    width: 48px;
    height: 48px;
    background: ${({theme}) => theme.COLORS.surfaceSecondary};
    border-radius: 8px;
    border: none;
    color: ${({theme}) => theme.COLORS.white};
    cursor: pointer;
    &:hover{
        border: 2px solid #F5F6F6;
        border-radius: 12px;
    }

    ${media.greaterThan('tablet')`
        background: ${({ theme }) => theme.COLORS.surfaceBackground};
    `}
`

export const Forms = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 548px;
`

export const Textarea = styled.textarea`
    padding: 12px 16px;
    width: 100%;
    height: 160px;
    background:  ${({ theme }) => theme.COLORS.surfaceBackground};
    border-radius: 8px;
    color: ${({ theme }) => theme.COLORS.textPrimary};
`

export const ContactSection = styled.div`


`