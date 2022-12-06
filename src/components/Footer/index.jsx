import { Link } from "react-router-dom";
import { About, App, Business, Contact, Container, Content, Social } from "./styles";

import pigzGray from '../../assets/pigz-gray.png'

import appStore from '../../assets/selo-app-store@3x.png'
import playStore from '../../assets/selo-google-play@3x.png'

import whatsAppIcon from '../../assets/Icon awesome-whatsapp@3x.png'
import imgHeadPhone from '../../assets/icone-fale-conosco@3x.png'

import logotipoOrange from '../../assets/logo-orange-horizontal-branco@3x.png'

export function Footer() {
  return (
    <Container>
      <header>
        <p>Fale com a Pigz</p> <img src={whatsAppIcon} alt={'WhatsApp icon'} /> <p><span>95</span>&nbsp;3224-2603</p>
      </header>

      <Content>
        <img src={pigzGray} alt={'Logotipo Pigz'} />
        <p>Tudo que você precisa.</p>

        <App>
          Baixe o APP
          <div>
            <a href={'https://apps.apple.com/br/app/pigz/id1526557835'} target={'_blank'} >
              <img src={appStore} alt={'Pigz na App Store'} />
            </a>
            <a href={'https://play.google.com/store/apps/details?id=app.pigz.mart&hl=pt_BR&gl=US'} target={'_blank'} >
              <img src={playStore} alt={'Pigz na Play Store'} />
            </a>
          </div>
        </App>

        <About>
          <h4>Pigz</h4>
          <p>Sobre o Pigz</p>
          <p>Portal do Parceiro</p>
          <p>Quero ser um Pigz Partner</p>
        </About>

        <Contact>
          <h4> <img src={imgHeadPhone} alt="" /> Fale conosco</h4>
          <p>falecom@pigz.com.br</p>
          <p>(95) 3224-2603</p>
        </Contact>

        <Social>
          <h4>Pigz nas redes</h4>
          <div>
            <a href={'https://br.linkedin.com/company/pigz'} target={'_blank'} title={'LinkedIn'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                <path id="linkedin-with-circle" d="M12.9.4A12.5,12.5,0,1,0,25.4,12.9,12.5,12.5,0,0,0,12.9.4ZM9.84,18.081H7.309V9.935H9.84ZM8.559,8.935A1.267,1.267,0,1,1,8.591,6.4a1.268,1.268,0,1,1-.033,2.531Zm10.526,9.146H16.554V13.567c0-1.051-.367-1.764-1.283-1.764a1.39,1.39,0,0,0-1.3.948,1.792,1.792,0,0,0-.085.633v4.7H11.356V12.533c0-1.017-.033-1.867-.066-2.6h2.2l.116,1.132h.051A2.93,2.93,0,0,1,16.171,9.75c1.665,0,2.914,1.116,2.914,3.514Z" transform="translate(-0.4 -0.4)" fill="#676767"/>
              </svg>
            </a>

            <a href={'https://www.instagram.com/pigzapp/'} target={'_blank'} title={'Instagram'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                <path id="instagram-with-circle" d="M17.975,9.06A2.156,2.156,0,0,0,16.74,7.825,3.6,3.6,0,0,0,15.531,7.6c-.687-.031-.892-.038-2.631-.038s-1.944.007-2.631.038a3.6,3.6,0,0,0-1.209.224A2.156,2.156,0,0,0,7.825,9.06,3.6,3.6,0,0,0,7.6,10.269c-.031.687-.038.893-.038,2.631s.007,1.944.038,2.631a3.6,3.6,0,0,0,.224,1.209A2.156,2.156,0,0,0,9.06,17.975a3.6,3.6,0,0,0,1.209.224c.686.031.892.038,2.631.038s1.944-.007,2.631-.038a3.6,3.6,0,0,0,1.209-.224,2.156,2.156,0,0,0,1.236-1.236,3.6,3.6,0,0,0,.224-1.209c.031-.687.038-.892.038-2.631s-.007-1.944-.038-2.631a3.6,3.6,0,0,0-.224-1.209ZM12.9,16.243A3.343,3.343,0,1,1,16.243,12.9,3.343,3.343,0,0,1,12.9,16.243Zm3.475-6.037a.781.781,0,1,1,.781-.781A.781.781,0,0,1,16.375,10.206ZM15.07,12.9a2.17,2.17,0,1,1-2.17-2.17,2.17,2.17,0,0,1,2.17,2.17ZM12.9.4A12.5,12.5,0,1,0,25.4,12.9,12.5,12.5,0,0,0,12.9.4Zm6.471,15.184a4.779,4.779,0,0,1-.3,1.58,3.328,3.328,0,0,1-1.9,1.9,4.779,4.779,0,0,1-1.58.3c-.694.032-.916.039-2.684.039s-1.99-.007-2.684-.039a4.779,4.779,0,0,1-1.58-.3,3.328,3.328,0,0,1-1.9-1.9,4.779,4.779,0,0,1-.3-1.58C6.4,14.89,6.39,14.668,6.39,12.9s.007-1.99.039-2.684a4.779,4.779,0,0,1,.3-1.58,3.328,3.328,0,0,1,1.9-1.9,4.779,4.779,0,0,1,1.58-.3c.694-.032.916-.039,2.684-.039s1.99.007,2.684.039a4.779,4.779,0,0,1,1.58.3,3.328,3.328,0,0,1,1.9,1.9,4.779,4.779,0,0,1,.3,1.58c.032.694.039.916.039,2.684s-.007,1.99-.039,2.684Z" transform="translate(-0.4 -0.4)" fill="#676767"/>
              </svg>
            </a>

            <a href={'https://www.facebook.com/pigzapp/'} target={'_blank'} title={'Facebook'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                <path id="facebook-with-circle" d="M12.9.4A12.5,12.5,0,1,0,25.4,12.9,12.5,12.5,0,0,0,12.9.4Zm2.961,8.638H13.982c-.223,0-.47.293-.47.682v1.357h2.35l-.355,1.935H13.512v5.809H11.295V13.012H9.283V11.077h2.012V9.939a2.789,2.789,0,0,1,2.688-2.96h1.879Z" transform="translate(-0.4 -0.4)" fill="#676767"/>
              </svg>
            </a>
            
            <a href={'https://www.youtube.com/@pigzapp'} target={'_blank'} title={'YouTube'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                <path id="youtube-with-circle" d="M14.987,12.683l-2.924-1.365a.3.3,0,0,0-.465.3v2.57a.3.3,0,0,0,.465.3l2.923-1.365C15.242,13,15.242,12.8,14.987,12.683ZM12.9.4A12.5,12.5,0,1,0,25.4,12.9,12.5,12.5,0,0,0,12.9.4Zm0,17.578c-6.4,0-6.51-.577-6.51-5.078S6.5,7.822,12.9,7.822s6.51.577,6.51,5.078S19.3,17.978,12.9,17.978Z" transform="translate(-0.4 -0.4)" fill="#676767"/>
              </svg>
            </a>
          </div>
        </Social>

        <div className="line"></div>

        <Business>
          <div className="links">
            <Link to={'/terms'}>
              Nossos termos
            </Link>
            <Link to={'privacy'}>
              Privacidade
            </Link>
            <Link to={'Help'}>
              Ajuda
            </Link>
          </div>
          <div className="info-business">
            <div className="cnpj">
              &copy; Copyright 2021 • Pigz • Todos os direitos reservados <br />
              Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85
            </div>
            <img src={logotipoOrange} alt={'Logotipo Orange'} />
          </div>
        </Business>
      </Content>

    </Container>
  )
}