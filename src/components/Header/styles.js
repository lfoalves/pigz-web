import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  position: sticky;
  top: 0;
  left: 0;

  z-index: 5;

  box-shadow: 0 6px 36px ${({theme}) => theme.SHADOW.GRAY_014};
  
  background-color: ${({theme}) => theme.COLORS.WHITE_TRANSPARENT};
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3rem 1.6rem 1.6rem;

  > img {
    height: 32pt;
  }
`;