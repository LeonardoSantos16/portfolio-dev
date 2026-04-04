import styled, { css } from "styled-components";

interface InputContainerProps {
  $hasError: boolean;
}

export const ContentInput = styled.input<InputContainerProps>`
  padding: 0.75rem 1rem;
  height: 3rem;
  background: ${({ theme }) => theme.COLORS.surfaceBackground};
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.textSecondary};
  width: 100%;
  border: 1.5px solid transparent;

  &:focus {
    outline: none;
    border: 1.5px solid
      ${({ theme, $hasError }) =>
        $hasError ? "#F75A68" : theme.COLORS.secondaryColor};
  }

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: #f75a68;
    `}
`;

export const Errors = styled.span`
  color: #f75a68;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: block;
`;
