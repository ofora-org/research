import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import MultipleChoice from 'components/Choice/MultipleChoice'
import AsteriscNote from '../AsteriscNote';

const Survey4 = (props) =>
  <ContentWrapper
    left={<Content {...props} />}
  />

const Content = ({onChange, value}) =>
  <div className='content'>
    <Title><span className='title'>Na sua opinião, quem deve participar das decisões sobre os espaços públicos de convívio* da cidade?</span></Title>
    <Subtitle>Pode selecionar várias opções:</Subtitle>
    <MultipleChoice
      other='Outros, quem?'
      otherPlaceholder='Digite aqui sua resposta'
      choices={[
        'Prefeitura',
        'Vereadores',
        'Empresas',
        'Especialistas técnicos',
        'ONGs',
        'Movimentos sociais',
        'Associações de moradores',
        'Cidadãos afetados pela decisão',
        'Qualquer cidadão interessado'
      ]}
      onChange={itemValue => onChange(4,itemValue)}
      value={value}
    />
    <AsteriscNote> * Ruas, praças, parques, quadras, ou outras áreas abertas para aproveitar a cidade.</AsteriscNote>
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
