import { IoLogoNodejs, IoLogoReact } from "react-icons/io5";
import TechIcon from "../../components/tech-icon";
import * as S from './styles';
import Button from "../../components/button";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";
import feedbackWidget from '../../assets/Project cover/Feedback Widget.png';
const Project = () => {
    return(
        <S.Container>
            <S.MainProject>
                <S.ButtonBack>
                    <ArrowLeft size={24} color="#ffffff"/>
                </S.ButtonBack>
                <img src={feedbackWidget} alt="image project" />
                <S.ContentWrapper>
                    <S.InfoProject>
                        <S.DateProject>Jul - Dec 2022</S.DateProject>
                        <S.TechContainer>
                                <TechIcon Icon={IoLogoReact} color="#9955E8" size={24} />
                                <TechIcon Icon={IoLogoNodejs} color="#9955E8" size={24} />
                        </S.TechContainer>
                    </S.InfoProject>
                    <h1>Feedback Widget</h1>
                    <p>My role: Full-stack developer <br /> Team: Marcus Souza (PM), Ilana Mallak (UX/UI Designer)<br/>
                        We improved our CSAT from 4.4 to 4.8 after analysing custumer feedback provided on our product trought this widget. <br /> 
                        I worked as the main developer of this features implementing the front-end using Tailwind and a Data Viz dashboard using Python to follow-up customer feedback and improve data analysis. <br /> 
                        The main challenge was to create a flexible structure that could be used as an API across all our company web applications.</p>
                </S.ContentWrapper>
            </S.MainProject>
            <S.Aside>
                <h3>Take a look at this project</h3>
                <Button Icon={ArrowUpRight} orderIcon='row-reverse' text='Live demo' backgroundHoverColor='#9955E8' backgroundColor='#8A42DB' width='312px' /> 
                <Button Icon={ArrowUpRight} orderIcon='row-reverse' text='Code' backgroundHoverColor='#4E4563' backgroundColor='#413A4F'  width='312px'/> 
            </S.Aside>
        </S.Container>
    )
}

export default Project;