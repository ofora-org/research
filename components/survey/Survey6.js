import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import SingleChoice from 'components/Choice/SingleChoice'

const Survey6 = (props) =>
  <ContentWrapper
    left={<Content {...props} />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title><span className='title'>Com qual gênero você se identifica?</span></Title>
    <Subtitle>Selecione uma opção!</Subtitle>
    <SingleChoice
      other='Outro, me identifico como:'
      choices={[
        'Mulher',
        'Homem',
        'Homem trans',
        'Mulher trans',
        'Travesti',
        'Não binário'
      ]}
      onChange={itemValue => onChange(6,itemValue)}
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

export default Survey6
