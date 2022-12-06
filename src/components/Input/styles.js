import styled from "styled-components";

export const Container = styled.div`

  > label {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    font-size: 12pt;
    font-weight: 500;
    line-height: 2.8rem;

    > input {
      height: 48pt;
      padding: 1.4rem 1.6rem;
      border-radius: 16pt;
      background-color: ${({theme}) => theme.COLORS.WHITE};
      border: 1px solid ${({theme}) => theme.COLORS.BORDER_INPUT};

      font-size: 14pt;

      margin-bottom: 2rem;

      &::placeholder {
        color: ${({theme}) => theme.COLORS.PLACEHOLDER_INPUT};
        font-size: 14pt;
      }
    }
  }
`;