import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import MultipleChoice from 'components/Choice/MultipleChoice'

const Survey7 = (props) =>
  <ContentWrapper
   left={<Content {...props} />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title><span className='title'>Com qual cor ou descendência você se identifica?</span></Title>
    <Subtitle>Pode selecionar várias opções:</Subtitle>
    <MultipleChoice
      other='Outro, me identifico como:'
      choices={[
        'Asiática',
        'Branca',
        'Negra/preta',
        'Indígena',
        'Árabe'
      ]}
      onChange={itemValue => onChange(7,itemValue)}
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
      @media only screen and (min-width: 720px) {
        .title {
          padding-right: 140px;
        }
      }
    `}</style>
  </div>

export default Survey7
