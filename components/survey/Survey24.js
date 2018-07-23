import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import SingleChoice from 'components/Choice/SingleChoice'

const Survey24 = props =>
  <ContentWrapper
    left={<Content {...props} />}
  />

const Content = ({onChange, value}) =>
  <div className='content'>
    <Title><span className='title'>Na sua vivência em São Paulo, com que frequência você:</span></Title>
    <p>Considera os espaços públicos de convívio* acessíveis para suas necessidades físicas, mentais ou sensoriais</p>
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
