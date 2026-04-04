import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Card from "../card";
import Devlinks from "../../assets/Project cover/DevLinks.png";
import Button from "../button";
import { ArrowRight } from "@phosphor-icons/react";
import * as S from "./styles";

interface Data {
  id: number;
  title: string;
  date: string;
  description: string;
  linkDemo: string;
  shortDescription: string;
  linkGithub: string;
  imageUrl?: string;
}

interface PropsCardData {
  data: Data[] | null;
  isLoading: boolean;
}

const ProjectsSection = ({ data, isLoading }: PropsCardData) => {
  return (
    <S.Container>
      <S.HeadProject>
        <span>Projetos</span>
        <h2>Meus projetos pessoais</h2>
      </S.HeadProject>

      <SkeletonTheme baseColor="#202024" highlightColor="#2d2d30">
        <S.CardsWrapper>
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <S.SkeletonCard key={index}>
                  <Skeleton height={200} borderRadius="16px 16px 0 0" />
                  <div style={{ padding: "1.5rem" }}>
                    <Skeleton
                      height={16}
                      width="30%"
                      style={{ marginBottom: "1rem" }}
                    />
                    <Skeleton
                      height={24}
                      width="70%"
                      style={{ marginBottom: "1rem" }}
                    />
                    <Skeleton count={2} height={14} />
                  </div>
                </S.SkeletonCard>
              ))
            : data?.map((repository) => (
                <Card
                  id={repository.id}
                  key={repository.id}
                  title={repository.title}
                  date={repository.date}
                  description={repository.shortDescription}
                  image={repository.imageUrl || Devlinks}
                />
              ))}
        </S.CardsWrapper>
      </SkeletonTheme>

      <Button
        Icon={ArrowRight}
        orderIcon="row"
        text="Ver todos"
        backgroundHoverColor="#4E4563"
        backgroundColor="#413A4F"
        width="128px"
        href="/projects"
      />
    </S.Container>
  );
};

export default ProjectsSection;
