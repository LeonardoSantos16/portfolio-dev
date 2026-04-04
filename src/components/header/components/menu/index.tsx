//import { SunDim } from '@phosphor-icons/react'
import * as S from './styles'

// TODO: Configurar os ButtonsActions

const Menu = () => {
  return (
    <>
      <S.MenuItems to="/" end>
        Home
      </S.MenuItems>
      <S.MenuItems to="/about-me">Sobre</S.MenuItems>
      <S.MenuItems to="/projects">Projetos</S.MenuItems>
      <S.Line />
      {/* <S.Actions>
        <S.ButtonAction>
          <SunDim size={24} />
        </S.ButtonAction>
        <S.ButtonAction>
          <SunDim size={24} />
        </S.ButtonAction>
      </S.Actions> */}
    </>
  )
}

export default Menu
