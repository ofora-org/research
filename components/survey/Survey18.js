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
    <Title><span className='title'>O que você costuma fazer quando vai São Paulo?</span></Title>
    <Subtitle>Pode usar só palavras-chave!</Subtitle>
    <textarea
      type='text'
      placeholder='Digite aqui sua resposta'
      onChange={e => onChange(18,e.target.value)}
      value={value}
      rows="6"
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
        }
      }
    `}</style>
  </div>

export default Survey12
