import { SunDim } from '@phosphor-icons/react'
import * as S from './styles'

const Sidebar = () =>{
    // TODO: Configurar os ButtonsActions 

    return(
        <S.Container>
            <S.MenuItems to='/' end>Home</S.MenuItems>
            <S.MenuItems to='/about'>About</S.MenuItems>
            <S.MenuItems to='/projects'>Projects</S.MenuItems>
            <S.MenuItems to='/contact'>Contact</S.MenuItems>
            <S.Line />
            <S.Actions>
                <S.ButtonAction><SunDim size={24}/></S.ButtonAction>
                <S.ButtonAction><SunDim size={24}/></S.ButtonAction>
            </S.Actions>
        </S.Container>
    )
}

export default Sidebar;