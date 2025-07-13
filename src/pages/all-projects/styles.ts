import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 3rem;
  max-width: 76rem;
  margin: 1rem auto;
  justify-content: center;
  min-height: 100vh;

  > h1 {
    ${({ theme }) => theme.fonts.kalamBigger};
    font-weight: 700;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.secondaryColor};
    padding: 0 0 0 1rem;
  }

  > span {
    ${({ theme }) => theme.fonts.heeboMedium};
    color: ${({ theme }) => theme.COLORS.textPrimary};
    margin-top: 2rem;
    padding: 0 0 0 1rem;
  }
`

export const WrapperCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 46px;
  justify-items: center;
  padding: 0 4px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-bottom: 7rem;
  gap: 0.3rem;
`

export const WrapperButton = styled.div`
  margin: 32px 0;
  align-self: center;
`
