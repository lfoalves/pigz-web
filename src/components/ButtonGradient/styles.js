import styled from "styled-components";

export const Container = styled.button`
  background: linear-gradient(258deg, ${({theme}) => theme.COLORS.ORANGE} 0%, ${({theme}) => theme.COLORS.ORANGE_YELLOW} 60%);
  
  padding: 0.6rem 2.4rem;

  border: none;
  border-radius: 32pt;

  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: ${({theme}) => theme.FONT.POPPINS};
  font-weight: 500;
  font-size: 14pt;

  box-shadow: 0px 10px 15px ${({theme}) => theme.COLORS.ORANGE_YELLOW_OPACITY};

  cursor: pointer;

  transition: all .3s;

  &:hover {
    filter: brightness(0.9);
  }
`;