import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'

const Survey12 = () =>
  <ContentWrapper
    left={<Content />}
  />

const Content = () =>
  <div className='content'>
    <Title><span className='title'>Porque você não sai mais vezes para curtir* em São Paulo?</span></Title>
    <Subtitle>Pode usar só palavras-chave, é rápido!</Subtitle>
    <input type='text' placeholder='Digite aqui a resposta.' />
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
        max-height: 100%;
      }
      .title {
        padding-right: 90px;
        display: block;
      }
      @media only screen and (min-width: 720px) {
        .title {
          padding-right: 140px;
        }
      }
    `}</style>
  </div>

export default Survey12
