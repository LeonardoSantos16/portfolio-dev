import { useState } from 'react';
import * as S from './styles'
import { List } from "@phosphor-icons/react";
import Sidebar from './components/sidebar/sidebar-menu';
const HeaderMobile = () =>{
    const [openMenu, setOpenMenu] = useState(false)
    
    const handleToggleMenu = () =>{
        setOpenMenu(!openMenu)
    }
    // TODO: Icone X para remover sidebar 
    return(
        <>
            <S.Container>
                <S.Content>
                    <S.Logo>Leonardo</S.Logo>
                    <S.IconContainer onClick={() => handleToggleMenu()}>
                        <List size={24} />
                    </S.IconContainer>
                </S.Content>
            </S.Container>
            {openMenu && <Sidebar />}
        </>
    )
}

export default HeaderMobile;