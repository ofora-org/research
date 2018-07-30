import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import CEPInput from 'components/CEPInput'
import MultipleChoice from 'components/Choice/MultipleChoice'

const Survey11 = () =>
  <ContentWrapper
    left={<Content />}
  />

const Content = () =>
  <div className='content'>
    <Title><span className='title'>Quais são seus espaços públicos de convívio* favoritos de São Paulo?</span></Title>
    <Subtitle>Se não souber ou tiver nome oficial, escreva como você chama o local e indique uma rua ou ponto próximo!</Subtitle>
    <div className='formGroup'>
      <label><span>#1</span> Favorito</label>
      <input type='text' placeholder='Digite Aqui' />
    </div>
    <div className='formGroup'>
      <label><span>#2</span> Favorito</label>
      <input type='text' placeholder='Digite Aqui' />
    </div>
    <div className='formGroup'>
      <label><span>#3</span> Favorito</label>
      <input type='text' placeholder='Digite Aqui' />
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
        font-weight: bold;
        font-size: 1.8em;
        color: #0009FF;
      }
      label span {
        -webkit-text-stroke: 1px blue;
        color: transparent;
        font-style: italic;
      }
      @media only screen and (min-width: 720px) {
        .title {
          padding-right: 140px;
        }
      }
    `}</style>
  </div>

export default Survey11
