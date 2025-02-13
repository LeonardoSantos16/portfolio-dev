import Card from "../card";
import Devlinks from '../../assets/Project cover/DevLinks.png';
import FeedBack from '../../assets/Project cover/Feedback Widget.png';
import Nutritional from '../../assets/Project cover/Feedback Widget.png';
import Button from "../button";
import { ArrowRight } from "@phosphor-icons/react";
import * as S from './styles';

const ProjectsSection = () => {
    return(
        <S.Container>
            <S.HeadProject>
                <span>Projects</span>
                <h2>Take a look at my highlighted projects</h2>
            </S.HeadProject>
            <S.CardsWrapper>
                <Card title="DevLinks" date="Jul - Dec 2022" description="A link agragator for social media." image={Devlinks}/>
                <Card title="Feedback Widget" date="Jul - Dec 2022" description="A feedback widget to improve your applications based on users feedback." image={FeedBack}/>
                <Card title="Nutritional table" date="Jul - Dec 2022" description="An app to improve your eating habits based on the nutritional values." image={Nutritional}/>
            </S.CardsWrapper>
            <Button Icon={ArrowRight} orderIcon='row-reverse' text='See all' backgroundHoverColor='#4E4563' backgroundColor='#413A4F'  width='128px'/> 
        </S.Container>
    )
}

export default ProjectsSection;