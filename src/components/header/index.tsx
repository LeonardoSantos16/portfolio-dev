import { useState } from 'react';
import * as S from './styles'
import { List } from "@phosphor-icons/react";
import Sidebar from './components/sidebar/sidebar-menu';
import useMobile from '../../hooks/useMobile';
import Menu from './components/menu';
const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const isMobile = useMobile();
    const handleToggleMenu = () =>{
        setOpenMenu(!openMenu)
    }
    // TODO: Icone X para remover sidebar 
    return(
        <>
            <S.Container>
                <S.Content>
                    <S.Logo>Leonardo</S.Logo>
                    {isMobile ?
                    <S.IconContainer onClick={() => handleToggleMenu()}>
                        <List size={24} />
                    </S.IconContainer>
                    :
                    <S.WrapperMenu>
                        <Menu />
                    </S.WrapperMenu>
                    }
                </S.Content>
            </S.Container>

            {openMenu && isMobile && <Sidebar />}
        </>
    )
}

export default Header;