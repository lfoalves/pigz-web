import { Container } from "./styles";

export function Card({ title, description, image, alt, ...rest }) {
  return (
    <Container {...rest}>
      <img src={image} alt={alt} />
      <p>{title}</p>
      <span>{description}</span>
    </Container>
  )
}