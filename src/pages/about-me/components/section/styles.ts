import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.375rem;
  width: 100%;

  > h1 {
    ${({ theme }) => theme.fonts.kalamBigger}
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.secondaryColor};
  }
`;
