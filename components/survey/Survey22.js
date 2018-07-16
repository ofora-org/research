import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import CEPInput from 'components/CEPInput'
import MultipleChoice from 'components/Choice/MultipleChoice'

const Survey22 = () =>
  <ContentWrapper
    left={<Content />}
  />

const Content = () =>
  <div className='content'>
    <Title><span className='title'>Na sua vivência em São Paulo, com que frequência você:</span></Title>
    <Subtitle>Sofre com racismo, machismo, homofobia e/ou outras discriminações em espaços públicos de convívio*</Subtitle>
    <SingleChoice
      choices={[
        'FREQUENTEMENTE (inclui sempre)',
        'ÀS VEZES',
        'RARAMENTE (inclui nunca)'
      ]}
      onChange={itemValue => onChange(22,itemValue)}
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

export default Survey22
