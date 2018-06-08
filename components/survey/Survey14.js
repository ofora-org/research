import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import SingleChoice from 'components/Choice/SingleChoice'

const Survey14 = (props) =>
  <ContentWrapper
   left={<Content {...props} />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title><span className='title'>Nos últimos 3 meses, com que frequência você saiu para curtir* a cidade de São Paulo? </span></Title>
    <Subtitle>Selecione uma opção abaixo!</Subtitle>
    <SingleChoice
      choices={[
        '5 a 7 vezes por semana',
        '2 a 4 vezes por semana',
        '1 vez por semana',
        '1 vez a cada 2 semanas',
        '1 vez por mês ou menos'
      ]}
      onChange={itemValue => onChange(14,itemValue)}
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

export default Survey14
