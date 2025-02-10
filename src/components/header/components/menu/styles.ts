import styled from "styled-components";
import { NavLink } from 'react-router-dom'
import media from "../../../../styles/media-query";
export const MenuItems = styled(NavLink)`
    ${({ theme }) => theme.fonts.heeboSmall}
    color: ${({ theme }) => theme.COLORS.textSecondary};
    text-decoration: none;

    &.active {
        color: ${({ theme }) => theme.COLORS.textPrimary};
        font-weight: bold;
    }
`

export const Line = styled.hr`
    width: 100%;
    border: 1px solid ${({theme}) => theme.COLORS.surfaceSecondary};
    ${media.greaterThan('tablet')`
        display: none;
    `}
`

export const Actions = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 1rem;

    ${media.greaterThan('desktop')`
        gap: 0.5rem;
    `}
`

export const ButtonAction = styled.button`
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
        background: ${({ theme}) => theme.COLORS.surfaceBackground};
    `}
`