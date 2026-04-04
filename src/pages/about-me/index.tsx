import { useQuery } from '@tanstack/react-query'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import TechIcon from '../../components/tech-icon'
import InfoWork from './components/info-work'
import Section from './components/section'
import * as S from './styles'
import { api } from '../../hooks/api'
import { PropsExperience } from '../../types/api-interface'
import { iconMapping } from '../../utils'
import { PropsIcon } from '../project'
import ReactMarkdown from 'react-markdown'

const AboutMe = () => {
  const { data: experiencesWork, isLoading: isLoadingWork } = useQuery<PropsExperience[]>({
    queryKey: ['experiences-work'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const response = await api.get(`experiences?type=WORK`)
      return response.data
    }
  })

  const { data: experiencesEducation, isLoading: isLoadingEducation } = useQuery<PropsExperience[]>({
    queryKey: ['experiences-education'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const response = await api.get(`experiences?type=EDUCATION`)
      return response.data
    }
  })

  const { data: icons, isLoading: isLoadingIcons } = useQuery<PropsIcon[]>({
    queryKey: ['tech-icons'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const response = await api.get('icon')
      return response.data
    }
  })

  const ABOUT_TEXT = `
  Tenho 24 anos e sou graduado em **Engenharia da Computação** pela Universidade Anhembi Morumbi, com formação técnica em Informática para Internet pela **Etec**. Minha trajetória profissional soma dois anos de atuação no mercado, com foco na **JBQ Global**, onde fui promovido de estagiário (1 ano e 2 meses) a **Desenvolvedor Júnior** (8 meses). Durante esse período, atuei no desenvolvimento frontend utilizando **React, Next.js e TypeScript**, além da implementação de APIs em **Node.js**. Tenho experiência prática trabalhando com **Metodologias Ágeis (Scrum)** e controle de versão com Git.  
  No backend, embora meu histórico profissional recente tenha sido com Node.js, minha stack principal de estudo e foco para novos projetos é o **.NET**, onde busco aprofundar meus conhecimentos para o desenvolvimento de sistemas. Também possuo conhecimentos em **React Native** (ecossistema **Expo**) para soluções mobile e **inglês em nível técnico** para leitura e escrita de documentações. Complemento minha formação acadêmica com especializações práticas, como as trilhas da **Rocketseat** (Fullstack, Node.js e React) e formações na **DIO**, além de estar atualmente focado no **curso.dev** para evoluir em arquitetura de software e boas práticas de desenvolvimento.
`;

  return (
    <SkeletonTheme baseColor="#202024" highlightColor="#2d2d30">
      <S.Container>
        <main>
          <Section title="Sobre mim">
            <S.InfoProfile>
              <ReactMarkdown>
                {ABOUT_TEXT}
                </ReactMarkdown>
            </S.InfoProfile>
          </Section>

          <Section title="Experiência de Trabalho">
            {isLoadingWork ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} style={{ marginBottom: '1.5rem' }}>
                  <Skeleton height={24} width="60%" />
                  <Skeleton height={16} width="40%" style={{ marginTop: '8px' }} />
                </div>
              ))
            ) : (
              experiencesWork?.map((experience) => (
                <InfoWork
                  key={experience.id}
                  title={experience.title}
                  dateEnd={experience.endDate}
                  dateBegin={experience.startDate}
                  mode={experience.mode}
                  companyName={experience.organization}
                />
              ))
            )}
          </Section>

          <Section title="Formação e Especializações">
            {isLoadingEducation ? (
              Array.from({ length: 2 }).map((_, i) => (
                <div key={i} style={{ marginBottom: '1.5rem' }}>
                  <Skeleton height={24} width="60%" />
                  <Skeleton height={16} width="40%" style={{ marginTop: '8px' }} />
                </div>
              ))
            ) : (
              experiencesEducation?.map((experience) => (
                <InfoWork
                  key={experience.id}
                  title={experience.title}
                  dateEnd={experience.endDate}
                  dateBegin={experience.startDate}
                  mode={experience.mode}
                  companyName={experience.organization}
                />
              ))
            )}
          </Section>
        </main>

        <aside>
          <Section title="Tech Stack">
            <S.WrapperIcon>
              {isLoadingIcons ? (
                Array.from({ length: 8 }).map((_, i) => (
                  <Skeleton 
                    key={i} 
                    width={72} 
                    height={72} 
                    borderRadius={16} 
                  />
                ))
              ) : (
                icons?.map((icon, index) => {
                  const IconComponent = iconMapping[icon.name_icon]
                  if (IconComponent) {
                    return (
                      <S.StyleIcon key={index}>
                        <TechIcon
                          Icon={IconComponent}
                          color="#F5DE19"
                          size={48}
                        />
                      </S.StyleIcon>
                    )
                  }
                  return null
                })
              )}
            </S.WrapperIcon>
          </Section>
        </aside>
      </S.Container>
    </SkeletonTheme>
  )
}

export default AboutMe