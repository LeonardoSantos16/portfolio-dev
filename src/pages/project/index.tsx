import { useQuery } from '@tanstack/react-query'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import TechIcon from '../../components/tech-icon'
import * as S from './styles'
import Button from '../../components/button'
import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react'
import feedbackWidget from '../../assets/Project cover/Feedback Widget.png'
import { api } from '../../hooks/api'
import { useParams, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { iconMapping } from '../../utils'
import { PropsData } from '../../types/api-interface'
import ReactMarkdown from 'react-markdown'
import { IoLogoGithub, IoGlobe } from 'react-icons/io5'
import { ptBR } from 'date-fns/locale'

export interface PropsIcon {
  name_icon: string
  name: string
  color: string
}

const Project = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { data: projectData, isLoading: isLoadingProject } = useQuery<PropsData>({
    queryKey: ['project', id],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const response = await api.get(`/repository/${id}`)
      return response.data
    },
    enabled: !!id
  })

  const { data: iconsData, isLoading: isLoadingIcons } = useQuery<PropsIcon[]>({
    queryKey: ['project-icons', id],
    queryFn: async () => {
      const response = await api.get(`/iconRepository/${id}`)
      return response.data.getIcon
    },
    enabled: !!id
  })

  const handleBackButton = () => {
    navigate(-1)
  }

  const isLoading = isLoadingProject || isLoadingIcons

  return (
    <SkeletonTheme baseColor="#202024" highlightColor="#2d2d30">
      <S.Container>
        <S.MainProject>
          <S.ButtonBack onClick={handleBackButton}>
            <ArrowLeft size={24} color="#ffffff" />
          </S.ButtonBack>

          {isLoading ? (
            <Skeleton height={400} borderRadius="16px 16px 0 0" />
          ) : (
            <img src={projectData?.imageUrl || feedbackWidget} alt="image project" />
          )}

          <S.ContentWrapper>
            <S.InfoProject>
              <S.DateProject>
                {isLoading ? (
                  <Skeleton width={120} />
                ) : (
                  projectData && format(new Date(projectData.date), 'MMMM dd, yyyy', { locale: ptBR })
                )}
              </S.DateProject>
              <S.TechContainer>
                {isLoading ? (
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Skeleton circle width={24} height={24} />
                    <Skeleton circle width={24} height={24} />
                    <Skeleton circle width={24} height={24} />
                  </div>
                ) : (
                  iconsData?.map((icon, index) => {
                    const IconComponent = iconMapping[icon.name_icon]
                    if (IconComponent) {
                      return (
                        <TechIcon
                          key={index}
                          Icon={IconComponent}
                          color={icon.color}
                          size={24}
                        />
                      )
                    }
                    return null
                  })
                )}
              </S.TechContainer>
            </S.InfoProject>

            {isLoading ? (
              <>
                <Skeleton height={40} width="70%" style={{ marginBottom: '1rem' }} />
                <Skeleton count={5} />
              </>
            ) : (
              <>
                <h1>{projectData?.title}</h1>
                <div>
                  <ReactMarkdown>{projectData?.description}</ReactMarkdown>
                </div>
              </>
            )}
          </S.ContentWrapper>
        </S.MainProject>

        <S.Aside>
          <h3>Acesse o projeto</h3>
          {isLoading ? (
            <>
              <Skeleton height={48} borderRadius={8} style={{ marginBottom: '1rem' }} />
              <Skeleton height={48} borderRadius={8} />
            </>
          ) : (
            <>
                <Button
                  Icon={ArrowUpRight}
                  IconBegin={IoGlobe}
                  orderIcon="row"
                  text="Aplicação"
                  backgroundHoverColor="#9955E8"
                  backgroundColor="#8A42DB"
                  width="100%"
                  disabled={!projectData?.linkDemo}
                  target="_target"
                  href={projectData?.linkDemo}
                />
                <Button
                  disabled={!projectData?.linkGithub}
                  Icon={ArrowUpRight}
                  IconBegin={IoLogoGithub}
                  orderIcon="row"
                  text="Repositório"
                  backgroundHoverColor="#4E4563"
                  backgroundColor="#413A4F"
                  width="100%"
                  target="_target"
                  href={projectData?.linkGithub}
                />
            </>
          )}
        </S.Aside>
      </S.Container>
    </SkeletonTheme>
  )
}

export default Project