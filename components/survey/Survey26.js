import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import SingleChoice from 'components/Choice/SingleChoice'


const Survey26 = props =>
  <ContentWrapper
    left={<Content {...props} />}
  />

const Content = ({onChange, value}) =>
  <div className='content'>
    <Title><span className='title'>Na sua vivência em São Paulo, com que frequência você:</span></Title>
    <Subtitle>Realiza ou gostaria de realizar atividades culturais, sociais e/ou econômicas em espaços públicos de convívio*</Subtitle>
    <SingleChoice
      choices={[
        'FREQUENTEMENTE (inclui sempre)',
        'ÀS VEZES',
        'RARAMENTE (inclui nunca)'
      ]}
      onChange={itemValue => onChange(26,itemValue)}
      value={value}
    />
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

export default Survey26