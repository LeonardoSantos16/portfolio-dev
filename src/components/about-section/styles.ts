import styled from "styled-components";
import media from "../../styles/media-query";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.surfaceBackground};
  ${media.greaterThan("tablet")`
        padding: 0 20px;
    `}
`;

export const SectionAbout = styled.section`
  display: flex;
  padding: 48px 24px;
  flex-direction: column;
  gap: 40px;
  max-width: 1660px;
  background-color: ${({ theme }) => theme.COLORS.surfacePrimary};

  img {
    width: 244px;
    height: 208px;
    align-self: center;
  }

  ${media.greaterThan("tablet")`
        flex-direction: row;
        padding: 48px 32px;
        margin: 40px auto;
        gap: 70px;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
    `}

  ${media.greaterThan("desktop")`
        gap: 136px;
        padding: 48px 72px;
        img{
            width: 488px;
            height: 417px;
        }
    `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
`;

export const TeckStack = styled.div`
  display: flex;
  gap: 24px;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
