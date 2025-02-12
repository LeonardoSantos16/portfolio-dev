import { ReadCvLogo } from "@phosphor-icons/react";
import Button from "../button";
import TechIcon from "../tech-icon";
import { IoLogoJavascript, IoLogoNodejs, IoLogoReact } from "react-icons/io5";
import * as S from './styles';
import codingImage from '../../assets/coding-bro.png';
const About = () => {
    return(
        <S.Container>
            <S.SectionAbout>
                <img src={codingImage} alt="imagem sobre" />
                <S.ContentWrapper>
                    <S.TeckStack>
                        <TechIcon Icon={IoLogoJavascript} color="#9955E8" size={24} />
                        <TechIcon Icon={IoLogoReact} color="#9955E8" size={24} />
                        <TechIcon Icon={IoLogoNodejs} color="#9955E8" size={24} />
                    </S.TeckStack>
                    <S.ContentText>
                        <span>About me</span>
                        <h2>I’m a passionate software developer looking for my first international oppotunity</h2>
                        <p>Beyond coding, I'm a coffee enthusiast, a cat lover, and a self-taught artist who enjoys spending my free time doodling. I am currently seeking opportunities to bring my skills and enthusiasm to a tech company in the United States or Europe and am excited about the prospect of relocating to pursue new challenges.</p>
                    </S.ContentText>
                    <Button Icon={ReadCvLogo} orderIcon='row' text='My resume' backgroundHoverColor='#9955E8' backgroundColor='#8A42DB'  width='160px'/> 
                </S.ContentWrapper>
            </S.SectionAbout>

        </S.Container>
    )
}

export default About;