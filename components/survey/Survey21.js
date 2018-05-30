import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import CEPInput from 'components/CEPInput'

const Survey11 = () =>
  <ContentWrapper
    left={<Content />}
  />

const Content = () =>
  <div className='content'>
    <Title><span className='title'>Quais são seus espaços públicos de convívio* favoritos de São Paulo?</span></Title>
    <Subtitle>Se não souber ou tiver nome oficial, escreva como você chama o local e indique uma rua ou ponto próximo!</Subtitle>
    <div className='formGroup'>
      <label>#1 Favorito:</label>
      <input type='text' placeholder='#1 Favorito' />
    </div>
    <div className='formGroup'>
      <label>#2 Favorito:</label>
      <input type='text' placeholder='#2 Favorito' />
    </div>
    <div className='formGroup'>
      <label>#3 Favorito:</label>
      <input type='text' placeholder='#3 Favorito' />
    </div>
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
      .formGroup {
        margin-bottom: 1em;
      }
      label {
        display: block;
      }
      @media only screen and (min-width: 720px) {
        .title {
          padding-right: 140px;
        }
      }
    `}</style>
  </div>

export default Survey11
