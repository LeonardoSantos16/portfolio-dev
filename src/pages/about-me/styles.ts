import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 76rem;
  width: 100%;
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
  color: ${({ theme }) => theme.COLORS.surfaceSecondary};
`;

export const WrapperIcon = styled.div`
  display: grid;
  grid-auto-columns: auto;
`;

export const InfoWork = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 75px;
`;
