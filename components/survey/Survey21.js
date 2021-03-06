import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import AsteriscNote from '../AsteriscNote';
import SingleChoice from 'components/Choice/SingleChoice'

const Survey11 = (props) =>
  <ContentWrapper
    left={<Content {...props} />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title><span className='title'>Você tem espaço(s) público(s) de convívio* favorito(s) em São Paulo?</span></Title>
    <Subtitle>Caso tenha, indique quais na caixa de texto.</Subtitle>
    <SingleChoice
      choices={['Não']}
      onChange={itemValue => onChange(21, itemValue)}
      value={value}
      other='Sim'
      otherPlaceholder='Insira aqui quais'
    />
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
