import styled from 'styled-components'
import media from '../../styles/media-query'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 76rem;
  margin: 32px auto;
  justify-content: center;
  min-height: 100vh;
  ${media.greaterThan('tablet')`
        flex-direction: row;
        gap: 1.5rem;
    `}
  img {
    width: 100%;
    ${media.greaterThan('tablet')`
            border-radius: 16px 16px 0 0;
        `}
  }
`

export const ButtonBack = styled.a`
  position: absolute;
  padding: 0.75rem;
  width: 3rem;
  height: 3rem;
  left: 1rem;
  top: 1rem;
  background: #171023;
  box-shadow: 0rem 0.5rem 1.5rem rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  cursor: pointer;
  ${media.greaterThan('tablet')`
        left: 1.5rem;
        top: 1.5rem;
    `}
`

export const MainProject = styled.main`
  position: relative;

  width: 100;
  background-color: ${({ theme }) => theme.COLORS.surfacePrimary};
  max-width: 50rem;
  h1 {
    ${({ theme }) => theme.fonts.heeboBigger};
    color: ${({ theme }) => theme.COLORS.textPrimary};
  }
  ${media.greaterThan('tablet')`
    border-radius: 16px;
  `}
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 24px;

  ${media.greaterThan('mobile')`
        padding: 32px 48px;
    `}
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
export const TechContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 24px;
  gap: 1rem;
  width: 22.5rem;
  height: 14.5rem;
  background: #2c243b;
  max-width: 24rem;
  height: 14.5rem;
  align-self: center;
  ${media.greaterThan('tablet')`
        height: 15.5rem;
        align-self: auto;
    `}

  >a {
    text-decoration: none;
  }
`
