import { useState } from "react";

import { ButtonGradient } from "../../components/ButtonGradient";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";

import { Cards, Container, Form, Marketplace, Section, SectionCards, SectionInfo } from "./styles";

import { CardOption } from "../../components/CardOption";
import { SelectCountry } from "../../components/SelectCountry";
import { Footer } from "../../components/Footer";

import pigzPigz from '../../assets/pigz-pigz@3x.png'
import imgBurger from '../../assets/burguer_2@3x.png'
import print from '../../assets/print.png'
import store from '../../assets/storefront.png'
import smartphone from '../../assets/smartphone.png'
import management from '../../assets/management.png'
import imgPhones from '../../assets/phones@3x.png'




export function Home() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  return (
    <Container>
      <div className="container">

        <Header />

        <Section>
          <header>
            <div>
              <h1>Pigz: tudo o que você precisa pra vender ainda mais!</h1>
              <img src={imgBurger} alt={'Imagem de um Hamburguer'} className={'burguer'}/>
            </div>
            <p>Temos uma equipe ansiosa para cadastrar seus produtos no Pigz marketplace e deixar sua loja prontinha para iniciar as vendar.</p>
          </header>

          <Form>
            <h2>Quero vender no Pigz</h2>
            <p>Dê o primeiro passo para aumentar suas vendas</p>

            <Input
              label={'Nome'}
              type={'text'}
              placeholder={'Leonercio Goesfeeld'}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              label={'E-mail'}
              type={'email'}
              placeholder={'leonercio.goesfeeld@email.com'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />


            <Input
              label={'Telefone'}
              type={'text'}
              placeholder={'(95) 99876-5432'}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            >
              <SelectCountry />
            </Input>

            <span>
              Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.
            </span>

            <ButtonGradient title={'Continuar'} type={'submit'}/>
          </Form>

          <img src={pigzPigz} alt={'Pigz Pigz'} />

        </Section>

        <SectionCards>
          <h3>Você tem um novo Pigzdido!</h3>

          <Cards>
            <Card
              title={'Marketplace'}
              description={'Pra sua loja verder mais'}
              image={store}
              />
            <Card
              title={'É fácil e rápido'}
              description={'Fazer um pedido no Pigz'}
              image={smartphone}
              />
            <Card
              title={'Pigz Gestão'}
              description={'Você no controler, sempre'}
              image={management}
              />
            <Card
              title={'Vias de impressão'}
              description={'Personalizáveis'}
              image={print}
              />
          </Cards>
        </SectionCards>

        <SectionInfo>
          <h3>Tudo que você precisa por apenas R$199/mês</h3>
          <p>Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por cada venda, sem letrinhas miúdas.</p>

          <Marketplace>
            <div className="charge">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <h3>Pigz Marketplace</h3>
            
            <div className="card">
              <p>Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, para vender muito mais.</p>
              <img src={imgPhones} alt={'Two phones Ad'} />
            </div>
          </Marketplace>

          <h3>E mais: suporte que realmente funciona!</h3>
          <p>Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você e seus clientes.</p>
        </SectionInfo>

        <CardOption
          title={'Pigz'}
          description={'Tudo o que você precisa'}
          price={'R$199/mês'}
          buttonTitle={'Vender no Pigz agora'}
        >
          <span>Aceite pix e Cartão de Crédito</span>
          <span>Antecipação Pix automática</span>
          <span>Não dependa de máquina de cartão</span>
          <span>Segurança para receber pedidos</span>
        </CardOption>

        <CardOption
          title={'Pagamento On-line'}
          description={'Segurança e agilidade'}
          price={'2,99% por transação'}
          buttonTitle={'Saiba mais'}
        >
          <span>Aceite pix e Cartão de Crédito</span>
          <span>Antecipação Pix automática</span>
          <span>Não dependa de máquina de cartão</span>
          <span>Segurança para receber pedidos</span>
          <span>Agilidade para entregar</span>
        </CardOption>

        <Footer />

      </div>
    </Container>
  )
}