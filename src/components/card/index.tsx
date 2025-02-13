import { IoLogoNodejs, IoLogoReact } from "react-icons/io5";
import TechIcon from "../tech-icon";
import * as S from './styles';

interface CardProps{
    title: string
    description: string
    date: string
    image: string
}
const Card = ({title, description, date, image} : CardProps) => {
    return(
        <S.Container>
            <img src={image} alt="image card" />
                <S.InfoProject>
                    <S.DateProject>{date}</S.DateProject>
                    <S.TechContainer>
                        <TechIcon Icon={IoLogoReact} color="#9955E8" size={24} />
                        <TechIcon Icon={IoLogoNodejs} color="#9955E8" size={24} />
                    </S.TechContainer>
                </S.InfoProject>
               
                <h3>{title}</h3>
                <S.ProjectDescription>{description}</S.ProjectDescription>
        </S.Container>
    )
}

export default Card;