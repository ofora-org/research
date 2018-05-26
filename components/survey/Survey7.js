import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import SingleChoice from 'components/Choice/SingleChoice'

const Survey7 = () =>
  <ContentWrapper
    left={<Content />}
  />

const Content = () =>
  <div className='content'>
    <Title><span className='title'>Com qual cor ou raça você se identifica?</span></Title>
    <Subtitle>Selecione uma opção!</Subtitle>
    <SingleChoice
      other='Outro, me identifico como:'
      choices={[
        'Asiática',
        'Branca',
        'Negra/preta',
        'Indígena',
        'Árabe'
      ]}
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
