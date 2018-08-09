import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'

const Survey1 = () =>
  <ContentWrapper
    left={<Content />}
    right={<Image />}
  />

const Content = () =>
  <div className='content navigation-color '>
    <Title><span className='title'>O Fora precisa te ouvir!</span></Title>
    <p>Suas respostas irão gerar reflexões e debates públicos, e também orientarão as ações culturais e intervenções urbanas do Fora na internet e em centros e periferias de São Paulo.</p>
    <p>É rápido, confidencial e nada será usado para fins comerciais!</p>
    <p><a href="https://ofora.org/o-que-e">Saiba mais</a></p>
    <style jsx>{`
      .title {
        font-size: 35px;
      }
      a {
        box-shadow: 0px -4px 0px 0px white inset;
      }
      @media only screen and (min-width: 720px) {
        .title {
          font-size: 56px;
        }
      }
    `}</style>
  </div>

  const Image = () =>
    <div className='image'>
      <style jsx>{`
          .image {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: url('/static/intro1.jpg');
            background-size: cover;
            background-position: center center;
          }
      `}</style>
    </div>

export default Survey1
