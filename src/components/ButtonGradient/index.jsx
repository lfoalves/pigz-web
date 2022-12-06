import { Container } from "./styles";

export function ButtonGradient({ title, ...rest}) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}