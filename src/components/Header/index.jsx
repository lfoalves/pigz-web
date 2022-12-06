import { Container } from "./styles";

import pigzLogo from '../../assets/pigz_logo.svg'
import { ButtonGradient } from "../ButtonGradient";

export function Header() {
  return (
    <Container>
      <img src={pigzLogo} alt={'Logotipo da Pigz'} />
      <ButtonGradient
        title={'Já sou parceiro'}
      />
    </Container>
  )
}