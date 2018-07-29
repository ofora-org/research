import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import AsteriscNote from 'components/AsteriscNote'

const Survey12 = (props) =>
  <ContentWrapper
   left={<Content {...props} />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title><span className='title'>Porque você não sai mais vezes para curtir* em São Paulo?</span></Title>
    <Subtitle>Pode usar só palavras-chave, é rápido!</Subtitle>
    <textarea
      type='text'
      placeholder='Digite aqui a resposta.'
      onChange={e => onChange(16,e.target.value)}
      value={value}
      rows="6"
    />
    <AsteriscNote>* Tempo livre, atividades sociais, culturais, esportivas, lazer, etc.</AsteriscNote>
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
