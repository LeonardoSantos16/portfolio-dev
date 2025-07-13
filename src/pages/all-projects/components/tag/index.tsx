import {
  categoryDisplayNames,
  ProjectCategory,
} from '../../../../types/api-interface'
import * as S from './styles'

interface TagProps {
  title: ProjectCategory
  isActive: boolean
  onClick: (title: string) => void
}

const Tag = ({ title, isActive, onClick }: TagProps) => {
  const displayName = categoryDisplayNames[title]
  return (
    <S.Container onClick={() => onClick(title)} $active={isActive}>
      <span>{displayName}</span>
    </S.Container>
  )
}

export default Tag
