import * as S from './styles'
import { List } from "@phosphor-icons/react";
const HeaderMobile = () =>{
    return(
        <S.Container>
            <S.Content>
                <S.Logo>Leonardo</S.Logo>
                <S.IconContainer>
                    <List size={24} />
                </S.IconContainer>
            </S.Content>
        </S.Container>
    )
}

export default HeaderMobile;