import TechIcon from "../tech-icon";
import * as S from './styles';
import {format} from 'date-fns';
import { iconMapping } from "../../utils";
import { api } from "../../hooks/api";
import { useCallback, useEffect, useState } from "react";
import { PropsIcon } from "../../pages/projects";
interface CardProps{
    title: string
    description: string
    date: string
    image: string
    id: number
}
const Card = ({title, description, date, image, id} : CardProps) => {
    const [icons, setIcons] = useState<PropsIcon[] | null>(null)
    const fetchIcons = useCallback(async () => {
        try {
            const responseIcons = await api.get(`/iconRepository/${id}`)
            setIcons(responseIcons.data.getIcon);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        fetchIcons();
    }, [fetchIcons]);
    
    return(
        <S.Container>
            <img src={image} alt="image card" />
                <S.InfoProject>
                    <S.DateProject>{format(date, 'MMMM dd, yyyy')}</S.DateProject>
                    <S.TechContainer>
                        {icons &&
                            icons.map((icon, index) => {
                                const IconComponent = iconMapping[icon.name_icon];
                                if(IconComponent){
                                    return(
                                        <TechIcon key={index} Icon={IconComponent} color="#9955E8" size={24} />
                                    )
                                }
                                return null;
                            }
                            )
                        }
                    </S.TechContainer>
                </S.InfoProject>
               
                <h3>{title}</h3>
                <S.ProjectDescription>{description}</S.ProjectDescription>
        </S.Container>
    )
}

export default Card;