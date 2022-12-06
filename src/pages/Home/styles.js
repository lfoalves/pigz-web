import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Section = styled.div`
  position: relative;
  padding: 3.2rem 1.6rem;

  overflow: hidden;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 91%;

    /* Ajustar meida queries before */

    background: linear-gradient(158deg, ${({theme}) => theme.COLORS.ORANGE} 0%, ${({theme}) => theme.COLORS.ORANGE_YELLOW} 50%);
  }

  > header {
    > div {
      display: flex;
      > h1 {
        font-family: ${({theme}) => theme.FONT.POPPINS};
        font-size: 40pt;
        font-weight: 700;
    
        line-height: 5.8rem;
        color: ${({theme}) => theme.COLORS.WHITE};
      }
      > img {
        display: block;
        margin: 0rem auto 2rem;
        margin-right: -13rem;

        height: 250pt;
      }
    }
  
    > p {
      font-family: ${({theme}) => theme.FONT.POPPINS};
      font-size: 16pt;
      color: ${({theme}) => theme.COLORS.WHITE};
  
      line-height: 3.4rem;
      margin: 2rem 0 4rem;
    }
  }


  > img {
    display: block;
    margin: 4rem auto 2rem;
    height: 140pt;
  }
`;



export const Form = styled.form`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 32pt;
  padding: 3.2rem 2.4rem;

  font-family: ${({theme}) => theme.FONT.POPPINS};

  > h2 {
    font-size: 28pt;
    font-weight: 600;

    text-align: center;
  }

  > p {
    font-size: 13pt;
    text-align: center;

    margin-bottom: 2.4rem;
  }

  > span {
    font-size: 13pt;
    line-height: 2.1rem;
    color: ${({theme}) => theme.COLORS.GRAY_600};

    display: inline-block;
  }

  > button {
    margin-top: 4rem;
    background: ${({theme}) => theme.COLORS.ORANGE};
    text-shadow: none;

    font-size: 16pt;

    height: 48pt;
    padding: 1.2rem;
    width: 100%;

    border: none;
    border-radius: 16pt;
  }
`;

export const SectionCards = styled.div`
  font-family: ${({theme}) => theme.FONT.POPPINS};
  background-color: ${({theme}) => theme.COLORS.WHITE};

  > h3 {
    font-size: 32pt;
    text-align: center;

    margin-inline: 6.4rem;
    margin-bottom: 4rem;

    line-height: 5rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;
`;

// SECTION INFO --->>>

export const SectionInfo = styled.section`
  background-color: ${({theme}) => theme.COLORS.WHITE};

  margin-top: 8rem;

  > h3 {
    font-size: 32pt;
    font-family: ${({theme}) => theme.FONT.POPPINS};
    font-weight: 700;
    text-align: center;

    padding: 0 4rem;

    line-height: 5rem;
  }

  > p {
    font-size: 16pt;
    font-family: ${({theme}) => theme.FONT.POPPINS};

    padding: 0 6.4rem;

    text-align: center;

    margin-top: 2rem;
  }
`;
export const Marketplace = styled.div`
    padding: 0 1.6rem;

    margin-bottom: 8rem;

    font-family: ${({theme}) => theme.FONT.POPPINS};

  > .charge {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    grid-gap: 1rem;

    margin: 3.6rem 0 2.4rem;

    > span:nth-child(1) {
      background-color: ${({theme}) => theme.COLORS.ORANGE};
    }

    > span {
      background-color: ${({theme}) => theme.COLORS.WHITE_GRAY};
      width: 100%;
      height: 4pt;
    }
  }

  > h3 {
    font-size: 24pt;
    text-align: center;

    margin-bottom: 4rem;
  }

  > .card {
    position: relative;
    top: 0;
    left: 0;

    text-align: center;

    height: 400pt;

    background: linear-gradient(224deg, ${({theme}) => theme.COLORS.ORANGE} 0%, ${({theme}) => theme.COLORS.ORANGE_YELLOW} 50%);


    font-size: 15pt;
    font-weight: 300;

    color: ${({theme}) => theme.COLORS.WHITE};

    padding: 4rem;

    border-radius: 64pt;

    > img {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      height: 200pt;
    }
  }
`;