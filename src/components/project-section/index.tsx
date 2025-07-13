import Card from '../card'
import Devlinks from '../../assets/Project cover/DevLinks.png'
import Button from '../button'
import { ArrowRight } from '@phosphor-icons/react'
import * as S from './styles'

interface Data {
  id: number
  title: string
  date: string
  description: string
  linkDemo: string
  shortDescription: string
  linkGithub: string
}

interface PropsCardData {
  data: Data[] | null
}

const ProjectsSection = ({ data }: PropsCardData) => {
  return (
    <S.Container>
      <S.HeadProject>
        <span>Projects</span>
        <h2>Take a look at my highlighted projects</h2>
      </S.HeadProject>
      <S.CardsWrapper>
        {data &&
          data.map((repository) => {
            return (
              <Card
                id={repository.id}
                key={repository.id}
                title={repository.title}
                date={repository.date}
                description={repository.shortDescription}
                image={Devlinks}
              />
            )
          })}
      </S.CardsWrapper>
      <Button
        Icon={ArrowRight}
        orderIcon="row-reverse"
        text="See all"
        backgroundHoverColor="#4E4563"
        backgroundColor="#413A4F"
        width="128px"
        href="/projects"
      />
    </S.Container>
  )
}

export default ProjectsSection
