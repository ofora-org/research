import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import AsteriscNote from '../AsteriscNote';

const Survey11 = () =>
  <ContentWrapper
    left={<Content />}
  />

const Content = () =>
  <div className='content'>
    <Title><span className='title'>Quais são seus espaços públicos de convívio* favoritos de São Paulo?</span></Title>
    <Subtitle>Se não souber o nome oficial, pode indicar o nome que você usa para o local e uma rua ou ponto próximo!</Subtitle>
    <div className='formGroup'>
      <label><span>#1</span> Favorito</label>
      <input type='text' placeholder='Digite aqui sua resposta' />
    </div>
    <div className='formGroup'>
      <label><span>#2</span> Favorito</label>
      <input type='text' placeholder='Digite aqui sua resposta' />
    </div>
    <div className='formGroup'>
      <label><span>#3</span> Favorito</label>
      <input type='text' placeholder='Digite aqui sua resposta' />
    </div>
    <AsteriscNote>* Ruas, praças, parques, quadras, ou outras áreas abertas para aproveitar a cidade.</AsteriscNote>
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
