import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  border-bottom: 5pt solid ${({theme}) => theme.COLORS.ORANGE_FOOTER};

  > header {
    margin: 5.7rem auto 5.6rem;
    
    font-size: 16pt;
    font-weight: 500;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    p:nth-child(1) {
      margin-right: 1.6rem;
    }

    > img {
      width: 18pt;
      margin-right: 0.7rem;
    }

    > p span {
      font-size: 13pt;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.WHITE_CARD};

  padding: 6.4rem 1.6rem 2.4rem;

  > p {
    font-size: 11pt;
    color: ${({theme}) => theme.COLORS.GRAY_FOOTER};

    margin-top: 0.8rem;
  }

  > img {
    height: 40pt;
  }

  .line {
    height: 1pt;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.GRAY_FOOTER_LINE};

    margin-top: 6.6rem;
  }
`;

export const App = styled.div`
  margin-top: 2.4rem;
  color: ${({theme}) => theme.COLORS.GRAY_FOOTER};
  font-size: 16pt;
  font-weight: 600;
  
  > div {
    margin-top: 1.6rem;

    display: flex;
    gap: 1rem;

    > a img {
      height: 30pt;
    }
  }
`;

export const About = styled.div`
  margin-top: 6.4rem;
  > h4 {
    font-size: 16pt;
    font-weight: 600;
    
    color: ${({theme}) => theme.COLORS.GRAY_FOOTER};

    margin-bottom: 2.4rem;
  }
  > p {
    font-size: 14pt;
    color: ${({theme}) => theme.COLORS.GRAY_600};
  }
  > p + p {
    margin-top: 2.4rem;
  }
`;

export const Contact = styled.div`
  margin-top: 6.5rem;

  img {
    height: 24pt;
  }

  > h4 {
    display: flex;
    align-items: center;
    gap: 1.4rem;

    font-size: 16pt;
    font-weight: 600;
    
    color: ${({theme}) => theme.COLORS.GRAY_FOOTER};

    margin-bottom: 2.4rem;
  }
  > p {
    font-size: 14pt;
    color: ${({theme}) => theme.COLORS.GRAY_600};
  }
  > p + p {
    margin-top: 2.4rem;
  }
`;

export const Social = styled.div`
  margin-top: 24pt;
  > h4 {
      display: flex;
      align-items: center;
      gap: 1.4rem;

      font-size: 16pt;
      font-weight: 600;
      
      color: ${({theme}) => theme.COLORS.GRAY_FOOTER};

      margin-bottom: 2.4rem;
    }

  > div {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    
    > a svg {
      width: 25pt;
      height: 25pt;
    }
  }
`;

export const Business = styled.div`
  .links {
    display: flex;
    align-items: center;
    gap: 3rem;

    margin-top: 1.6rem;

    a {
      font-size: 12pt;
      color: ${({theme}) => theme.COLORS.GRAY_600};
    }
  } 
  .info-business {
    margin-top: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({theme}) => theme.COLORS.GRAY_FOOTER};
    font-size: 10pt;

    > img {
      height: 20pt;
    }
  }
`;