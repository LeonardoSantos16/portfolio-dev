import { Link as LinkIcon, GithubLogo } from "@phosphor-icons/react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "../button";

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
        <span>HTML , JavaScript, SASS, React</span>

        <S.ContentLink>
          {props.linkDemo && (
            <Button
              Icon={LinkIcon}
              text="Vizualizar site"
              backgroundHoverColor="#9955E8"
              backgroundColor="#8A42DB"
              width="148px"
              orderIcon={"row"}
            />
          )}
          {props.linkGithub && (
            <Button
              Icon={GithubLogo}
              text="Ver código"
              backgroundHoverColor="#b2fffa "
              backgroundColor="#5ecea0"
              width="128px"
              orderIcon={"row"}
            />
          )}
        </S.ContentLink>
      </S.ContentText>
    </S.Container>
  );
};

export default CardProject;
