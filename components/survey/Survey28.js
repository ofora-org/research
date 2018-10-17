import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'

const Survey28 = (props) =>
  <ContentWrapper
    left={<Content {...props} />}
    right={<Image />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title>
      <span className='title'>Para finalizar, qual é a transformação prática que você faria na cidade de São Paulo se não tivessem limitações?</span>
    </Title>
    <Subtitle>Pode usar só palavras-chave!</Subtitle>
    <input
      type='text'
      placeholder='Digite aqui sua resposta'
      onChange={e => onChange(28,e.target.value)}
      value={value}
    />
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
        max-height: 100%;
      }
      .title {
        display: block;
      }
      @media only screen and (min-width: 720px) {
        .title {
        }
      }
    `}</style>
  </div>

const Image = () =>
  <div className='image'>
    <style jsx>{`
      .image {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background-image: url('/static/image6.jpg');
        background-size: cover;
        background-position: bottom center;
      }
    `}</style>
  </div>

export default Survey28
