import CardProject from "../../components/card-project";
import * as S from "./styles";
import devImage from "../../assets/Project cover/DevLinks.png";

const Projects = () => {
  return (
    <S.Container>
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
    </S.Container>
  );
};

export default Projects;
