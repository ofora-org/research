import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import SingleChoice from 'components/Choice/SingleChoice'
import AsteriscNote from '../AsteriscNote';

const Survey23 = props =>
  <ContentWrapper
    left={<Content {...props} />}
  />

const Content = ({onChange, value}) =>
  <div className='content'>
    <Title><span className='title'>Na sua vivência em São Paulo, com que frequência você:<br />
    Se sente inseguro ou em perigo nos espaços públicos de convívio*
    </span></Title>
    <Subtitle>Selecione uma opção:</Subtitle>
    <SingleChoice
      choices={[
        'Frequentemente (ou sempre)',
        'Às vezes',
        'Raramente (ou nunca)'
      ]}
      onChange={itemValue => onChange(23,itemValue)}
      value={value}
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
      }
      @media only screen and (min-width: 720px) {
        .title {
          padding-right: 140px;
        }
      }
    `}</style>
  </div>

export default Survey23
