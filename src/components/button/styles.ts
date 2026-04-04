// styles.ts
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

type Direction = 'row' | 'row-reverse'

interface ButtonStyleProps {
  $backgroundColor: string
  $width?: string
  $orderIcon: Direction
  $backgroundHoverColor: string
  $height?: string
  $justify?: boolean
  $disabled?: boolean // <-- Adicionado aqui
}

const buttonStyles = css<ButtonStyleProps>`
  display: flex;
  gap: 8px;
  border: none;
  color: ${({ theme }) => theme.COLORS.textPrimary};
  border-radius: 8px;
  align-items: center;
  justify-content: ${({ $justify }) => ($justify ? 'space-around' : 'center')};
  cursor: pointer;
  flex-direction: ${({ $orderIcon }) => $orderIcon || 'row'};
  background: ${({ $backgroundColor, theme }) =>
    $backgroundColor || theme.COLORS.surfaceSecondary};
  height: ${({ $height }) => $height || '56px'};
  width: ${({ $width }) => $width || '100%'};
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background: ${({ $backgroundHoverColor }) =>
      $backgroundHoverColor || 'auto'};
  }

  ${({ $disabled }) => $disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(0.4);
    pointer-events: none; /* Impede cliques no Link */
  `}
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