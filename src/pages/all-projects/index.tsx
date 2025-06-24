import CardProject from "../../components/card-project";
import * as S from "./styles";
import devImage from "../../assets/Project cover/DevLinks.png";
import Tag from "./components/tag";
import { useState } from "react";
import { ArrowDown } from "@phosphor-icons/react";

import Button from "../../components/button";
enum ProjectCategory {
  WEB_DEVELOPMENT = "Web Development",
  MOBILE_DEVELOPMENT = "Mobile Development",
  BACKEND_SYSTEMS = "Backend Systems",
  DATA_SCIENCE = "Data Science",
  FULL_STACK = "Full Stack",
  ALL = "All",
}
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    ProjectCategory.ALL
  );

  const handleTagClick = (categoryTitle: string) => {
    setActiveCategory(categoryTitle as ProjectCategory);
  };
  return (
    <S.Container>
      <h1>Projetos</h1>
      <span>Alguns dos meus trabalhos</span>

      <S.Tags>
        {Object.values(ProjectCategory).map((category) => (
          <Tag
            key={category}
            title={category}
            isActive={activeCategory === category}
            onClick={handleTagClick}
          />
        ))}
      </S.Tags>
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

      <S.WrapperButton>
        <Button
          Icon={ArrowDown}
          orderIcon="row-reverse"
          text="Carregar mais"
          backgroundHoverColor="#4E4563"
          backgroundColor="#413A4F"
          width="172px"
        />
      </S.WrapperButton>
    </S.Container>
  );
};

export default Projects;
