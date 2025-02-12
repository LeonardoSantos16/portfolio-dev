import { IconProps } from "@phosphor-icons/react"
import * as S from './styles'

type Direction = "row" | "row-reverse"

interface ButtonProps {
    Icon: React.ComponentType<IconProps>
    text: string
    backgroundColor: string
    backgroundHoverColor: string
    width?: string
    orderIcon: Direction
}
const Button = ({Icon, text, backgroundColor, width, orderIcon, backgroundHoverColor} : ButtonProps) => {
    return(
        <S.Button $backgroundColor={backgroundColor} $backgroundHoverColor={backgroundHoverColor} $width={width} $orderIcon={orderIcon}>
            <Icon size={24}/>
            <S.Text>{text}</S.Text>
        </S.Button>
    )

}

export default Button;