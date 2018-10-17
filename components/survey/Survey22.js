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
    <Title><span className='title'>Você participa ou já participou de grupos que organizam atividades ou influem nos espaços públicos de convívio* de São Paulo?</span></Title>
    <Subtitle>Incluem associações, coletivos, amigos, etc. Em caso de participar, indique em quais na caixa de texto.</Subtitle>
    <SingleChoice
      choices={['Não']}
      onChange={itemValue => onChange(22, itemValue)}
      value={value}
      other='Sim, quais?'
      otherPlaceholder='Cite aqui quais são, é importante!'
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
        font-size: 0.8em
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
