import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import AsteriscNote from 'components/AsteriscNote'

const Survey15 = (props) =>
  <ContentWrapper
   left={<Content {...props} />}
   right={<Image />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title><span className='title'>O que você costuma fazer quando sai para curtir* em São Paulo?</span></Title>
    <Subtitle>Pode usar só palavras-chave, é rápido:</Subtitle>
    <textarea
      type='text'
      placeholder='Digite aqui sua resposta'
      onChange={e => onChange(15,e.target.value)}
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


const Image = () =>
  <div className='image'>
    <style jsx>{`
      @media only screen and (min-width: 720px) {
        .image {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: url('/static/image4.jpg');
          background-size: cover;
          background-position: bottom center;
        }
      }
    `}</style>
  </div>

export default Survey15
