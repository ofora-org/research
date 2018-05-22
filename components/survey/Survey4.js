import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import MultipleChoice from 'components/Choice/MultipleChoice'

const Survey4 = () =>
  <ContentWrapper
    left={<Content />}
  />

const Content = () =>
  <div className='content'>
    <Title><span className='title'>Na sua opinião, quem deve participar das decisões sobre os espaços públicos de convívio* da cidade?</span></Title>
    <Subtitle>Pode selecionar várias opções!</Subtitle>
    <MultipleChoice choices={[
      'Prefeitura ',
      'Vereadores',
      'Empresas',
      'Especialistas técnicos',
      'ONGs',
      'Movimentos sociais',
      'Associações de moradores',
      'Cidadãos afetados pela decisão',
      'Todo/qualquer cidadão',
      'Outros, quem? [aberta]'
    ]} />
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

export default Survey4
