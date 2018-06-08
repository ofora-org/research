import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import MultipleChoice from 'components/Choice/MultipleChoice'

const Survey8 = (props) =>
  <ContentWrapper
    left={<Content {...props} />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title><span className='title'>Quais canais de comunicação você costuma utilizar?</span></Title>
    <Subtitle>Pode selecionar várias opções!</Subtitle>
    <MultipleChoice
      other='Outros:'
      choices={[
        'WhatsApp',
        'Facebook',
        'Instagram',
        'Twitter',
        'Youtube',
        'Jornal impresso grátis',
        'Jornal impresso pago',
        'Site de notícias',
        'Revista',
        'TV aberta',
        'TV paga',
        'Rádio',
        'Podcast',
        'Boca a boca'
      ]}
      onChange={itemValue => onChange(8,itemValue)}
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

export default Survey8
