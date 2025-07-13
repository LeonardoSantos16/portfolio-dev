import CardProject from '../../components/card-project'
import * as S from './styles'
import devImage from '../../assets/Project cover/DevLinks.png'
import Tag from './components/tag'
import { useEffect, useState } from 'react'
import { ArrowDown } from '@phosphor-icons/react'
import Button from '../../components/button'
import { api } from '../../hooks/api'
import { ProjectCategory, PropsData } from '../../types/api-interface'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    ProjectCategory.ALL
  )
  const [data, setData] = useState<PropsData[] | null>(null)

  const handleTagClick = (categoryTitle: string) => {
    setActiveCategory(categoryTitle as ProjectCategory)
  }

  useEffect(() => {
    const fetchRepositoriesFilteredCategory = async () => {
      try {
        const response = await api.get<PropsData[]>(
          `/repository?category=${activeCategory}`
        )
        setData(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchRepositoriesFilteredCategory()
  }, [activeCategory])

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
            onClick={handleTagClick}
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
                image={devImage}
                id={repository.id}
              />
            )
          })}
      </S.WrapperCard>

      <S.WrapperButton>
        <Button
          Icon={ArrowDown}
          orderIcon="row"
          text="Carregar mais"
          backgroundHoverColor="#4E4563"
          backgroundColor="#413A4F"
          width="172px"
        />
      </S.WrapperButton>
    </S.Container>
  )
}

export default Projects
