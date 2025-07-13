import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

type Direction = 'row' | 'row-reverse'

interface ButtonStyleProps {
  $backgroundColor: string
  $width?: string
  $orderIcon: Direction
  $backgroundHoverColor: string
  $height?: string
}

const buttonStyles = css<ButtonStyleProps>`
  display: flex;
  gap: 8px;
  border: none;
  color: ${({ theme }) => theme.COLORS.textPrimary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-direction: ${({ $orderIcon }) => $orderIcon || 'row'};
  background: ${({ $backgroundColor, theme }) =>
    $backgroundColor || theme.COLORS.surfaceSecondary};
  height: ${({ $height }) => $height || '56px'};
  width: ${({ $width }) => $width || '100%'};

  &:hover {
    background: ${({ $backgroundHoverColor }) =>
      $backgroundHoverColor || 'auto'};
  }
`

export const Button = styled.button<ButtonStyleProps>`
  ${buttonStyles}
`

export const Text = styled.span`
  ${({ theme }) => theme.fonts.heeboSmall};
  color: ${({ theme }) => theme.COLORS.textPrimary};
`

export const ButtonLink = styled(Link)<ButtonStyleProps>`
  ${buttonStyles}
  text-decoration: none;
`
