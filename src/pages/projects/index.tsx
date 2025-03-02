import { IoLogoNodejs, IoLogoReact } from "react-icons/io5";
import TechIcon from "../../components/tech-icon";
import * as S from './styles';
import Button from "../../components/button";
import { ArrowLeft, ArrowUpRight} from "@phosphor-icons/react";
import feedbackWidget from '../../assets/Project cover/Feedback Widget.png';
import { api } from "../../hooks/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { PropsData } from "../home";
import {format} from 'date-fns'

const Project = () => {
    const params = useParams()
    const [data, setData] = useState<PropsData | null>(null)

    const fetchRepositories = async (id : string | undefined) =>{
        try{
            const response = await api.get(`/repository/${id}`)
            setData(response.data)
        } catch(error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchRepositories(params.id);
    }, [params.id])

    return(
        <S.Container>
            <S.MainProject>
                <S.ButtonBack>
                    <ArrowLeft size={24} color="#ffffff"/>
                </S.ButtonBack>
                <img src={feedbackWidget} alt="image project" />
                <S.ContentWrapper>
                    <S.InfoProject>
                        <S.DateProject>{ data && format(data.date, 'MMMM dd, yyyy')}</S.DateProject>
                        <S.TechContainer>
                                <TechIcon Icon={IoLogoReact} color="#9955E8" size={24} />
                                <TechIcon Icon={IoLogoNodejs} color="#9955E8" size={24} />
                        </S.TechContainer>
                    </S.InfoProject>
                    <h1>{data?.title}</h1>
                    <p>{data?.description}</p>
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