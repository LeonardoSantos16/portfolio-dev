import CardProject from '../../components/card-project'
import * as S from './styles'
import devImage from '../../assets/Project cover/DevLinks.png'
import Tag from './components/tag'
import { useEffect, useState } from 'react'
import { ArrowDown } from '@phosphor-icons/react'
import Button from '../../components/button'
import { api } from '../../hooks/api'
import {
  ProjectCategory,
  PropsData,
  PropsResponseRepositories,
} from '../../types/api-interface'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    ProjectCategory.ALL
  )
  const [data, setData] = useState<PropsData[]>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const ITEMS_PER_PAGE = 6

  useEffect(() => {
    let isActive = true

    const fetchRepositories = async () => {
      try {
        const response = await api.get<PropsResponseRepositories>(
          `/repository?category=${activeCategory}&page=${page}&limit=${ITEMS_PER_PAGE}`
        )

        const newItems = response.data.repository
        const totalItems = response.data.totalItems

        if (isActive) {
          setData((prevData) => [...prevData, ...newItems])

          setData((currentData) => {
            if (currentData.length >= totalItems) {
              setHasMore(false)
            }
            return currentData
          })
        }
      } catch (error) {
        if (isActive) {
          console.error(error)
        }
      }
    }
    fetchRepositories()
    return () => {
      isActive = false
    }
  }, [activeCategory, page])
  const handleTagClick = (category: ProjectCategory) => {
    if (category === activeCategory) return

    setActiveCategory(category)
    setData([])
    setPage(1)
    setHasMore(true)
  }
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  //TODO: adicionar skeleton e debounce
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
      <S.WrapperCard>
        {data &&
          data.map((repository) => {
            return (
              <CardProject
                key={repository.id}
                title={repository.title}
                description={repository.shortDescription}
                image={repository.imageUrl || devImage}
                id={repository.id}
              />
            )
          })}
      </S.WrapperCard>

      {hasMore && (
        <S.WrapperButton>
          <Button
            Icon={ArrowDown}
            orderIcon="row"
            text="Carregar mais"
            backgroundHoverColor="#4E4563"
            backgroundColor="#413A4F"
            width="172px"
            onClick={handleLoadMore}
          />
        </S.WrapperButton>
      )}
    </S.Container>
  )
}

export default Projects
