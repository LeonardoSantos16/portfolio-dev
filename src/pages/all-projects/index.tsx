import CardProject from "../../components/card-project";
import * as S from "./styles";
import devImage from "../../assets/Project cover/DevLinks.png";

const Projects = () => {
  return (
    <S.Container>
      <h1>Projetos</h1>
      <span>Alguns dos meus trabalhos</span>
      <S.WrapperCard>
        <CardProject
          title={"Project Tile goes here"}
          description={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
          image={devImage}
          id={0}
          linkDemo="teste"
          linkGithub="test"
        />
        <CardProject
          title={"Project Tile goes here"}
          description={
            "This is sample project description random things are here in d"
          }
          image={devImage}
          id={0}
          linkDemo="teste"
          linkGithub="test"
        />
        <CardProject
          title={"Project Tile goes here Project Tile goes here"}
          description={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
          image={devImage}
          id={0}
          linkDemo="teste"
          linkGithub="test"
        />
        <CardProject
          title={"Project Tile goes here"}
          description={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
          image={devImage}
          id={0}
          linkDemo="teste"
          linkGithub="test"
        />
      </S.WrapperCard>
    </S.Container>
  );
};

export default Projects;
