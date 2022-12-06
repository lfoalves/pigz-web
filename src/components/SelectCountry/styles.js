import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 24pt;
    height: 24pt;
    margin-right: 0.5rem;
  }
`;

export const Select = styled.select`
  border: none;
  padding: 0.5rem;
  font-size: 1.4rem;
  font-family: ${({theme}) => theme.FONT.POPPINS};
  margin-right: 1rem;
    option: {
      font-family: ${({theme}) => theme.FONT.POPPINS};
    }
`;