import styled from "styled-components";
import media from "../../styles/media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.375rem;
  max-width: 76rem;
  width: 100%;
  align-self: normal;
  justify-content: space-between;
  margin: 4rem auto;
  padding: 0 16px;

  ${media.greaterThan("tablet")`
    flex-direction: row;
    padding: 0;
    padding-right: 1rem;
  `}

  > main {
    display: flex;
    flex-direction: column;
    gap: 2.375rem;
    width: 100%;
    max-width: 44.25rem;
    flex: 1;
    ${media.greaterThan("tablet")`
      padding: 0 0 0 16px;
    `}
  }

  > aside {
    max-width: 300px;
    width: 100%;
    ${media.lessThan("tablet")`
       max-width: 100%;
    `}
  }
`;

export const InfoProfile = styled.div`
  ${({ theme }) => theme.fonts.heeboBig};
  color: ${({ theme }) => theme.COLORS.textSecondary};
  text-align: justify;
  line-height: 1.6;

  p {
    ${({ theme }) => theme.fonts.heeboMedium};
    margin-bottom: 1.5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: ${({ theme }) => theme.COLORS.textPrimary};
    font-weight: 700;
  }

  h1 {
    ${({ theme }) => theme.fonts.kalamBigger};
    color: ${({ theme }) => theme.COLORS.secondaryColor};
    margin-bottom: 1rem;
    text-align: left;
  }
`;

export const WrapperIcon = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(72px, 1fr));
  gap: 1.5rem;
`;

export const StyleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: #2c243b;
  padding: 8px;
  border-radius: 16px;
`;
