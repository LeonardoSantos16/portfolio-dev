import styled from "styled-components";

export const Container = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 4px 32px;
  align-items: center;
  background-color: ${({ theme, $active }) =>
    $active ? theme.COLORS.primaryColor : theme.COLORS.surfaceBackground};
  border-radius: 50px;
  border: 1px solid #484e53;
  cursor: pointer;
  > span {
    color: ${({ theme }) => theme.COLORS.white};
    ${({ theme }) => theme.fonts.heeboMedium}
  }
`;
