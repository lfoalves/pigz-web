import { ButtonGradient } from "../ButtonGradient";
import { Container, Price } from "./styles";

export function CardOption({ title, buttonTitle, price, description, children, ...rest}) {
  return (
    <Container {...rest}>
      <h3>{title}</h3>
      <p>{description}</p>
      
      {children}

      <Price>
        {price}
      </Price>

      {
        buttonTitle &&
        <ButtonGradient
          title={buttonTitle}
        />
      }
    </Container>
  )
}