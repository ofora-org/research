import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import CEPInput from 'components/CEPInput'
import MultipleChoice from 'components/Choice/MultipleChoice'

const Survey24 = () =>
  <ContentWrapper
    left={<Content />}
  />

const Content = () =>
  <div className='content'>
    <Title><span className='title'>Na sua vivência em São Paulo, com que frequência você:</span></Title>
    <Subtitle>Considera os espaços públicos de convívio* acessíveis para suas necessidades físicas, mentais ou sensoriais</Subtitle>
    <SingleChoice
      choices={[
        'FREQUENTEMENTE (inclui sempre)',
        'ÀS VEZES',
        'RARAMENTE (inclui nunca)'
      ]}
      onChange={itemValue => onChange(24,itemValue)}
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

export default Survey24
