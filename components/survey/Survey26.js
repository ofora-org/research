import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import MultipleChoice from 'components/Choice/MultipleChoice'
import AsteriscNote from '../AsteriscNote';

const Survey26 = props =>
  <ContentWrapper
    left={<Content {...props} />}
  />

const Content = ({onChange, value}) =>
  <div className='content'>
    <Title><span className='title'>Em uma semana comum, com quais das situações abaixo você lida pelo menos 1 vez nos espaços públicos de convívio* de São Paulo?</span></Title>
    <Subtitle>Pode selecionar várias opções:</Subtitle>
    <MultipleChoice
      choices={[
        'Discriminação (racismo, machismo, homofobia e/ou outro)',
        'Insegurança, risco, perigo ou medo',
        'Dificuldades para suas necessidades físicas, mentais ou sensoriais',
        'Repressão de autoridades (policiais, seguranças, guardas, outras)',
        'Restrições para mobilidade (acesso, custos, trânsito, lotação)',
        'Degradação, lixo, maus cheiros e/ou esgoto'
      ]}
      onChange={itemValue => onChange(26,itemValue)}
      value={value}
      other='Outras, quais?'
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
      .formGroup {
        margin-bottom: 1em;
      }
      label {
        display: block;
      }
      @media only screen and (min-width: 720px) {
        .title {
          padding-right: 140px;
        }
      }
    `}</style>
  </div>

export default Survey26
