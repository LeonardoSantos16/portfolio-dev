import styled from 'styled-components'
import media from '../../styles/media-query'

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  width: 19.5rem;
  height: 20.5rem;
  background: ${({ theme }) => theme.COLORS.surfacePrimary};
  border-radius: 16px;
  justify-content: space-between;
  cursor: pointer;
  img {
    height: 160px;
    width: 100%;
    border-radius: 8px 8px 0px 0px;
  }

  &:hover {
    border: 1.5px solid #7dffaf;
    box-shadow: 0px 0px 48px rgba(125, 255, 175, 0.24);
  }

  ${media.greaterThan('mobile')`
        padding: 24px;
        width: 24rem;
        height: 21.5rem;
    `}
`

export const TechContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.COLORS.textPrimary};
  margin-top: -8px;
  text-align: left;
  height: 4.5rem;
`

export const DateProject = styled.div`
  ${({ theme }) => theme.fonts.heeboSmall};
  color: ${({ theme }) => theme.COLORS.textSecondary};
`
export const InfoProject = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
