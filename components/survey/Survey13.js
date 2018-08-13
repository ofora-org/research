import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import MultipleChoice from 'components/Choice/MultipleChoice'

const Survey10 = (props) =>
  <ContentWrapper
    left={<Content {...props} />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title><span className='title'>Na sua opinião, quais mudanças você faria no espaço público de convívio* que você acabou indicar?</span></Title>
    <Subtitle>Pode selecionar várias opções:</Subtitle>
    <MultipleChoice
      choices={[
        'Nada',
        'Melhorar infraestrutura do espaço',
        'Cercar com grades',
        'Ter internet grátis',
        'Plantar árvores/plantas',
        'Colocar bebedouros, bicas, fontes',
        'Melhorar iluminação pública',
        'Mais oferta de atividades culturais',
        'Melhorar coleta de lixo',
        'Melhorar manutenção geral',
        'Instalar mobiliários para exercícios, brincadeiras, animais, etc.',
        'Proibir ou restringir sons, festas, shows e semelhantes',
        'Tirar grades ou barreiras de acesso ao espaço',
        'Mais feiras e pontos de comércio'
      ]}
      other='Outras mudanças:'
      onChange={itemValue => onChange(13,itemValue)}
      value={value}
    />
    <AsteriscNote>* Ruas, praças, parques, quadras, ou outras áreas abertas para aproveitar a cidade.</AsteriscNote>
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

export default Survey10
