import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'

const Survey12 = () =>
  <ContentWrapper
    left={<Content />}
  />

const Content = () =>
  <div className='content'>
    <Title><span className='title'>Qual é o espaço público de convívio* que você frequenta mais perto da sua casa?</span></Title>
    <Subtitle>Se não souber nome oficial, escreva como você chama o local e indique uma rua ou ponto próximo!</Subtitle>
    <input type='text' maxLength={60} placeholder='Digite aqui o local ou ponto próximo.' />
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

export default Survey12
