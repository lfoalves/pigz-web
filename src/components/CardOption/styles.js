import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.WHITE_CARD};
  padding: 6rem;

  border-radius: 64pt;

  font-family: ${({theme}) => theme.FONT.POPPINS};

  margin-top: 4rem;

  > h3 {
    font-size: 24pt;

    line-height: 4rem;

    margin-bottom: 0.4rem;
  }
  > p {
    color: ${({theme}) => theme.COLORS.GRAY_600};
    font-size: 16pt;
    font-weight: 500;

    margin-bottom: 2rem;

    line-height: 4rem;
  }

  > span {
    font-size: 14pt;
    display: inline-block;
  }
  > span + span {
    margin-top: 1.4rem;
  }


  > button {
    height: 56pt;
    width: 100%;

    font-size: 16pt;

    margin-top: 2rem;
  }
`;

export const Price = styled.div`
  width: fit-content;
  font-size: 20pt;
  font-weight: 700;

  margin-top: 4rem;  
  padding: 1.4rem 2.4rem;

  background-color: ${({theme}) => theme.COLORS.WHITE};

  border-radius: 32pt;
`;