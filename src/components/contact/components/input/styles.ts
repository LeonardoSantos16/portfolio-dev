import styled from "styled-components";

export const ContentInput = styled.input`
    padding: 0.75rem 1rem;
    height: 3rem;
    background: ${({ theme }) => theme.COLORS.surfaceBackground};
    border-radius: 8px;
    color: ${({ theme }) => theme.COLORS.textSecondary};
    width: 100%;
 
    ::placeholder{
    }

    &:focus{
        border: 1.5px solid ${({ theme }) => theme.COLORS.secondaryColor};
    }
`