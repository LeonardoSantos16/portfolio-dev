import styled from 'styled-components'
import media from '../../styles/media-query'

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 1rem;
  max-width: 76rem;
  margin: 0 auto;
  gap: 1rem;
  ${media.greaterThan(`mobile`)`
        flex-direction: row;
    `}
`

export const Copyright = styled.div`
  ${({ theme }) => theme.fonts.heeboSmall};
  color: ${({ theme }) => theme.COLORS.textSecondary};
`

export const ContentSocial = styled.div`
  display: flex;
  gap: 1.5rem;

  ${media.greaterThan('mobile')`
        gap: 2rem;
    `}
`

export const MenuItem = styled.a`
  ${({ theme }) => theme.fonts.heeboSmall};
  color: ${({ theme }) => theme.COLORS.textSecondary};
  text-decoration: none;
  cursor: pointer;
`
