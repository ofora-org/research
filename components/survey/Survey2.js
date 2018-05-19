import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'

const Survey1 = () =>
  <ContentWrapper
    left={<Content />}
    right={<Image />}
  />

const Content = () =>
  <div className='wrapper'>
    <div className='background' />
    <div>
      <Title><span className='title'>Suas respostas vão orientar as ações culturais e urbanísticas do Fora em centros e periferias de São Paulo.</span></Title>
      <Subtitle>Vem compartilhar como você se sente nos espaços públicos de São Paulo.</Subtitle>
    </div>
    <style jsx>{`
      .background {
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        background: red;
        z-index: -1;
      }
      .wrapper {
        display: flex;
        align-items: center;
        height: 100%;
        color: white;
      }
      @media only screen and (max-width: 720px) {
        .title {
          padding-right: 72px;
          display: inline-block;
        }
      }
    `}</style>
  </div>

  const Image = () =>
    <div className='wrapper'>
      <div><Title>Vamos começar!</Title></div>
      <style jsx>{`
        @media only screen and (max-width: 720px) {
          .wrapper {
            margin-top: 20vh;
            text-align: center;
          }
        }
        @media only screen and (min-width: 720px) {
          .wrapper {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </div>

export default Survey1
