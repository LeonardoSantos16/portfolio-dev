import styled from "styled-components";
import media from "../../styles/media-query";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1.5rem;
    gap: 1.5rem;
    //isolation: isolate;
    max-width: 103.75rem;
    background: #171023;
    margin: 0 auto;
    ${media.greaterThan('mobile')`
        gap: 2.5rem;
    `}
`

export const HeadProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
`

export const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;

    ${media.greaterThan('mobile')`
        gap: 2rem;
    `}
`
