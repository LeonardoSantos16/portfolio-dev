import TechIcon from '../../components/tech-icon'
import * as S from './styles'
import Button from '../../components/button'
import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react'
import feedbackWidget from '../../assets/Project cover/Feedback Widget.png'
import { api } from '../../hooks/api'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { iconMapping } from '../../utils'
import { PropsData } from '../../types/api-interface'
import ReactMarkdown from 'react-markdown'
export interface PropsIcon {
  name_icon: string
}
const Project = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [data, setData] = useState<PropsData | null>(null)
  const [icons, setIcons] = useState<PropsIcon[] | null>(null)
  const fetchRepositories = async (id: string | undefined) => {
    try {
      const response = await api.get(`/repository/${id}`)
      const responseIcons = await api.get(`/iconRepository/${id}`)
      setData(response.data)
      setIcons(responseIcons.data.getIcon)
    } catch (error) {
      console.error(error)
    }
  }

  const handleBackButton = () => {
    navigate(-1)
  }

  useEffect(() => {
    fetchRepositories(params.id)
  }, [params.id])

  return (
    <S.Container>
      <S.MainProject>
        <S.ButtonBack onClick={handleBackButton}>
          <ArrowLeft size={24} color="#ffffff" />
        </S.ButtonBack>
        <img src={feedbackWidget} alt="image project" />
        <S.ContentWrapper>
          <S.InfoProject>
            <S.DateProject>
              {data && format(data.date, 'MMMM dd, yyyy')}
            </S.DateProject>
            <S.TechContainer>
              {icons &&
                icons.map((icon, index) => {
                  const IconComponent = iconMapping[icon.name_icon]
                  if (IconComponent) {
                    return (
                      <TechIcon
                        key={index}
                        Icon={IconComponent}
                        color="#9955E8"
                        size={24}
                      />
                    )
                  }
                  return null
                })}
            </S.TechContainer>
          </S.InfoProject>
          <h1>{data?.title}</h1>
          <p>
            <ReactMarkdown>{data?.description}</ReactMarkdown>
          </p>
        </S.ContentWrapper>
      </S.MainProject>
      <S.Aside>
        <h3>Take a look at this project</h3>
        <a href={data?.linkDemo} target="_blank">
          <Button
            Icon={ArrowUpRight}
            orderIcon="row-reverse"
            text="Live demo"
            backgroundHoverColor="#9955E8"
            backgroundColor="#8A42DB"
            width="312px"
          />{' '}
        </a>
        <a href={data?.linkGithub} target="_blank">
          <Button
            Icon={ArrowUpRight}
            orderIcon="row-reverse"
            text="Code"
            backgroundHoverColor="#4E4563"
            backgroundColor="#413A4F"
            width="312px"
          />{' '}
        </a>
      </S.Aside>
    </S.Container>
  )
}

export default Project
