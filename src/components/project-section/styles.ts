import styled from 'styled-components'
import media from '../../styles/media-query'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0rem;
  gap: 1.5rem;
  max-width: 103.75rem;
  background: #171023;
  margin: 0 auto;
  width: 100%;

  ${media.greaterThan('mobile')`
    gap: 2.5rem;
  `}
`

export const HeadProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  
  span {
    color: ${({ theme }) => theme.COLORS.secondaryColor};
    ${({ theme }) => theme.fonts.kalamSmal};
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.textPrimary};
    ${({ theme }) => theme.fonts.heeboMedium};
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;

  ${media.greaterThan('mobile')`
    gap: 1.5rem;
  `}
`

export const SkeletonCard = styled.div`
  width: 100%;
  max-width: 350px;
  background: #241d31;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`