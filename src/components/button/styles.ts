import styled from "styled-components";

type Direction = "row" | "row-reverse"

interface ButtonStyleProps {
    $backgroundColor: string;
    $width?: string;
    $orderIcon: Direction;
    $backgroundHoverColor: string;
}
export const Button = styled.button<ButtonStyleProps>`
    display: flex;
    flex-direction: ${({$orderIcon}) => $orderIcon || 'row' };
    gap: 8px;
    border: none;
    color: ${({theme}) => theme.COLORS.textPrimary};
    background: ${({$backgroundColor, theme}) => $backgroundColor || theme.COLORS.surfaceSecondary};
    border-radius: 8px;
    height: 56px;
    align-items: center;
    justify-content: center;
    width: ${({$width}) => $width || '100%'};
    cursor: pointer;
    &:hover{
        background: ${({$backgroundHoverColor}) => $backgroundHoverColor || 'auto'};
    }
`

export const Text = styled.span`
    ${({theme}) => theme.fonts.heeboSmall};
    color: ${({theme}) => theme.COLORS.textPrimary};
`