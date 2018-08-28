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
      <Title>
        <span className='title'>As perguntas a seguir são sobre suas experiências nos espaços públicos de convívio em São Paulo, ou seja, como você vive as ruas, praças, parques, quadras e outras áreas comuns da cidade.</span>
      </Title>
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
      .title {
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
      <div>
        <Title>Vamos começar!</Title>
        <p className='navigation-color'>Para navegar pelo questionário, utilize as setas no canto inferior direito ou no teclado. No celular, use os dedos para subir, descer e passar de tela.</p>
      </div>
      <style jsx>{`
        @media only screen and (max-width: 720px) {
          .wrapper {
            text-align: left;
          }
        }
        @media only screen and (min-width: 720px) {
          .wrapper {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </div>

export default Survey1
