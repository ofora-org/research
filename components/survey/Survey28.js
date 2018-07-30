import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'

const Survey28 = (props) =>
  <ContentWrapper
   left={<Content {...props} />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title>
      <span className='title'>Na sua opinião, quais foram os melhores e piores aspectos desta pesquisa?</span>
    </Title>
    <Subtitle>Resuma no campo abaixo!</Subtitle>
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

export default Survey28
