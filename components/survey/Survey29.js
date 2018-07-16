import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'

const Survey29 = (props) =>
  <ContentWrapper
   left={<Content {...props} />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title><span className='title'>Acabou, valeu, obrigado!</span></Title>
    <Subtitle>Sua contribuição foi fundamental para o Fora!</Subtitle>
    <Subtitle>Siga para o site, Facebook ou Instagram.</Subtitle>
    <input
      type='text'
      placeholder='Digite aqui a resposta.'
      onChange={e => onChange(29,e.target.value)}
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

export default Survey29
