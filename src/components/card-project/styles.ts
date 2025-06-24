import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.button`
  box-sizing: border-box;
  max-width: 23.3125rem;
  width: 100%;
  min-height: 35.4375rem;
  background: ${({ theme }) => theme.COLORS.surfacePrimary};
  box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  text-decoration: none;
  padding: 0;
  &:hover {
    border: 1.5px solid #7dffaf;
    box-shadow: 0px 0px 48px rgba(125, 255, 175, 0.24);
  }
`;

export const Image = styled.img`
  max-width: 23.4375rem;
  width: 100%;
  height: 260px;
  border-radius: 20px;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 1.75rem;
  min-height: 300px;

  > h1 {
    ${({ theme }) => theme.fonts.heeboBig};
    color: ${({ theme }) => theme.COLORS.textPrimary};
    text-align: left;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.textPrimary};
    ${({ theme }) => theme.fonts.heeboMedium};
    min-height: 8.125rem;
    text-align: start;
  }

  > span {
    background-image: ${({ theme }) => theme.COLORS.gradientHeading};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    ${({ theme }) => theme.fonts.heeboSmall};
  }
`;

export const ContentLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  ${({ theme }) => theme.fonts.heeboSmall};
  color: ${({ theme }) => theme.COLORS.textPrimary};
`;
