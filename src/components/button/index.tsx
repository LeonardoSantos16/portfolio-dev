import { IconProps } from '@phosphor-icons/react'
import * as S from './styles'
import { ButtonHTMLAttributes } from 'react'
type Direction = 'row' | 'row-reverse'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: React.ComponentType<IconProps>
  text: string
  backgroundColor: string
  backgroundHoverColor: string
  width?: string
  height?: string
  orderIcon: Direction
  href?: string
}

const Button = ({
  Icon,
  text,
  backgroundColor,
  width,
  height,
  orderIcon,
  backgroundHoverColor,
  href,
  ...rest
}: ButtonProps) => {
  if (href) {
    return (
      <S.ButtonLink
        to={href}
        $height={height}
        $backgroundColor={backgroundColor}
        $backgroundHoverColor={backgroundHoverColor}
        $width={width}
        $orderIcon={orderIcon}
      >
        <Icon size={24} />
        <S.Text>{text}</S.Text>
      </S.ButtonLink>
    )
  }

  return (
    <S.Button
      {...rest}
      $height={height}
      $backgroundColor={backgroundColor}
      $backgroundHoverColor={backgroundHoverColor}
      $width={width}
      $orderIcon={orderIcon}
    >
      <Icon size={24} />
      <S.Text>{text}</S.Text>
    </S.Button>
  )
}

export default Button
