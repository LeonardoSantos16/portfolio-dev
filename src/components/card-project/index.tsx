import { Link as LinkIcon, GithubLogo } from '@phosphor-icons/react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import Button from '../button'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../hooks/api'
import { PropsIcon } from '../../pages/project'

interface CardProps {
  title: string
  description: string
  image: string
  id: number
  linkGithub?: string
  linkDemo?: string
}

const CardProject = (props: CardProps) => {
  const navigate = useNavigate()
  const [icons, setIcons] = useState<PropsIcon[]>([])
  console.log('🚀 ~ CardProject ~ icons:', icons)
  const handleClick = () => {
    navigate(`/project/${props.id}`)
  }

  const fetchIcons = useCallback(async () => {
    try {
      const responseIcons = await api.get(`/iconRepository/${props.id}`)
      setIcons(responseIcons.data.getIcon)
    } catch (error) {
      console.error(error)
    }
  }, [props.id])

  useEffect(() => {
    fetchIcons()
  }, [fetchIcons])

  return (
    <S.Container onClick={handleClick}>
      <S.Image src={props.image} alt="imagem do card" />
      <S.ContentText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div>
          {icons &&
            Array.isArray(icons) &&
            icons.map((icon, index) => {
              return (
                <S.TextTag key={index}>
                  {icon.name}
                  {index < icons.length - 1 ? ', ' : ''}
                </S.TextTag>
              )
            })}
        </div>
        <S.ContentLink>
          {props.linkDemo && (
            <Button
              Icon={LinkIcon}
              text="Vizualizar site"
              backgroundHoverColor="#9955E8"
              backgroundColor="#8A42DB"
              width="148px"
              height="42px"
              orderIcon="row-reverse"
            />
          )}
          {props.linkGithub && (
            <Button
              Icon={GithubLogo}
              text="Ver código"
              backgroundHoverColor="#b2fffa "
              backgroundColor="#5ecea0"
              width="128px"
              height="42px"
              orderIcon="row-reverse"
            />
          )}
        </S.ContentLink>
      </S.ContentText>
    </S.Container>
  )
}

export default CardProject
