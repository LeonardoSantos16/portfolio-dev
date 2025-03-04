import * as S from './styles';
import { ArrowUp } from "@phosphor-icons/react";

const Footer = () => {
    return(
        <S.ContainerFooter>
            <S.Copyright>
                Leonardo Mendes 2025. Layout based on Rocketseat’s template.
            </S.Copyright>
            <S.ContentSocial>
             <S.MenuItem href='https://github.com/LeonardoSantos16' target="_blank">
                GitHub
             </S.MenuItem>
             <S.MenuItem href='https://www.linkedin.com/in/leonardo-mendes-ferreira-/' target="_blank">
                LinkedIn
             </S.MenuItem>
                <ArrowUp size={24} color='#CDD0D4'/>
            </S.ContentSocial>
        </S.ContainerFooter>
    )

}

export default Footer;