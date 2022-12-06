import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  height: 27rem;
  padding: 4rem 2.5rem;
  
  background-color: ${({theme}) => theme.COLORS.WHITE_CARD};

  border-radius: 64pt;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 7.2rem;
  }

  > p {
    font-family: ${({theme}) => theme.FONT.POPPINS};
    font-size: 16pt;
    font-weight: 600;

    margin-top: 3.2rem;
  }

  > span {
    font-family: ${({theme}) => theme.FONT.POPPINS};
    font-size: 1.6rem;
    font-weight: 400;

    margin-top: 0.8rem;
  }
`;