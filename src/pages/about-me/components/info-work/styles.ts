import styled from "styled-components";

const StylePattern = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Head = styled(StylePattern)`
  margin-bottom: 0.625rem;
`;

export const BottomStyle = styled(StylePattern)`
  margin-top: 1rem;
  margin-bottom: 4px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid #ebeaed;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 23.75rem;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const StyleTitle = styled.h2`
  ${({ theme }) => theme.fonts.heeboBig};
  color: ${({ theme }) => theme.COLORS.textPrimary};
`;

export const StyleType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  background: ${({ theme }) => theme.COLORS.secondaryColor};
  border-radius: 100px;
  height: 24px;
  width: fit-content;
`;

export const TextStyle = styled.p`
  color: ${({ theme }) => theme.COLORS.white};
  ${({ theme }) => theme.fonts.heeboSmall};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Descricao = styled.p``;
