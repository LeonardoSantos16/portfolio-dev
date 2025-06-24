import { Link as LinkIcon, GithubLogo } from "@phosphor-icons/react";
import TechIcon from "../tech-icon";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
  image: string;
  id: number;
  linkGithub?: string;
  linkDemo?: string;
}

const CardProject = (props: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${props.id}`);
  };

  return (
    <S.Container onClick={handleClick}>
      <S.Image src={props.image} alt="imagem do card" />
      <S.ContentText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <span>Tech stack :</span>

        <S.ContentLink>
          {props.linkDemo && (
            <S.Wrapper>
              <TechIcon Icon={LinkIcon} size={20} color="#F5F6F6" />
              {
                // TODO: fazer a lógica para desabilitar quando não tiver link
              }
              <S.StyledLink to={props.linkDemo}>Vizualizar site</S.StyledLink>
            </S.Wrapper>
          )}
          {props.linkGithub && (
            <S.Wrapper>
              <TechIcon Icon={GithubLogo} size={20} color="#000000" />
              <S.StyledLink to={props.linkGithub}>Ver código</S.StyledLink>
            </S.Wrapper>
          )}
        </S.ContentLink>
      </S.ContentText>
    </S.Container>
  );
};

export default CardProject;
