import { useInfiniteQuery } from "@tanstack/react-query";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import CardProject from "../../components/card-project";
import * as S from "./styles";
import devImage from "../../assets/Project cover/DevLinks.png";
import Tag from "./components/tag";
import { useState } from "react";
import { ArrowDown } from "@phosphor-icons/react";
import Button from "../../components/button";
import { api } from "../../hooks/api";
import {
  ProjectCategory,
  PropsResponseRepositories,
} from "../../types/api-interface";

const ITEMS_PER_PAGE = 6;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    ProjectCategory.ALL,
  );

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetching,
  } = useInfiniteQuery<PropsResponseRepositories>({
    queryKey: ["projects", activeCategory],
    queryFn: async ({ pageParam }) => {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const response = await api.get(
        `/repository?category=${activeCategory}&page=${pageParam}&limit=${ITEMS_PER_PAGE}`,
      );
      return response.data;
    },
    getNextPageParam: (lastPage, allPages) => {
      const loadedItems = allPages.length * ITEMS_PER_PAGE;
      return loadedItems < lastPage.totalItems
        ? allPages.length + 1
        : undefined;
    },
    initialPageParam: 1,
  });

  const repositories = data?.pages.flatMap((page) => page.repository) ?? [];

  const handleTagClick = (category: ProjectCategory) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
  };

  const showSkeleton = isLoading || (isFetching && repositories.length === 0);

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
            onClick={() => handleTagClick(category)}
          />
        ))}
      </S.Tags>

      <SkeletonTheme baseColor="#202024" highlightColor="#2d2d30">
        <S.WrapperCard>
          {showSkeleton
            ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                <S.SkeletonCardWrapper key={index}>
                  <Skeleton height={200} borderRadius={8} />
                  <Skeleton height={24} width="80%" style={{ marginTop: 12 }} />
                  <Skeleton height={16} width="100%" count={2} />
                </S.SkeletonCardWrapper>
              ))
            : repositories.map((repository) => (
                <CardProject
                  key={repository.id}
                  title={repository.title}
                  description={repository.shortDescription}
                  image={repository.imageUrl || devImage}
                  id={repository.id}
                />
              ))}
        </S.WrapperCard>
      </SkeletonTheme>

      {hasNextPage && !showSkeleton && (
        <S.WrapperButton>
          <Button
            Icon={ArrowDown}
            orderIcon="row"
            text={isFetchingNextPage ? "Carregando..." : "Carregar mais"}
            backgroundHoverColor="#4E4563"
            backgroundColor="#413A4F"
            width="172px"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          />
        </S.WrapperButton>
      )}
    </S.Container>
  );
};

export default Projects;
