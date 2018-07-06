import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'

const Survey12 = (props) =>
  <ContentWrapper
    left={<Content {...props} />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title><span className='title'>Qual é o espaço público de convívio* que você {value['10'] && value[10].includes('Moro') ? 'frequenta mais perto da sua casa?' : 'mais frequenta quando está em São Paulo?'}</span></Title>
    <Subtitle>Se não souber nome oficial, escreva como você chama o local e indique uma rua ou ponto próximo!</Subtitle>
    <input type='text' placeholder='Digite aqui a resposta.' onChange={e => onChange(12,e.target.value)} value={value['12']} />
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
