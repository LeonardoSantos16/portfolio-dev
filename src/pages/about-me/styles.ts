import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 76rem;
  align-self: normal;
  justify-content: space-between;
  margin: 4rem auto;

  > main {
    display: flex;
    flex-direction: column;
    gap: 2.375rem;
    width: 100%;
    max-width: 44.25rem;
  }

  > aside {
    max-width: 300px;
    width: 100%;
  }
`;

export const InfoProfile = styled.p`
  ${({ theme }) => theme.fonts.heeboMedium};
  color: ${({ theme }) => theme.COLORS.textSecondary};
`;

export const WrapperIcon = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  row-gap: 20px;
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
