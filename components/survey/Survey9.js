import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import MultipleChoice from 'components/Choice/MultipleChoice'
import AsteriscNote from '../AsteriscNote';

const Survey9 = (props) =>
  <ContentWrapper
    left={<Content {...props} />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title><span className='title'>Com base na sua experiência nos espaços públicos de convívio* de São Paulo quais são as 3 palavras que melhor a descrevem?</span></Title>
    <Subtitle>Selecione até três opções:</Subtitle>
    <MultipleChoice
      max={3}
      other='Outras:'
      choices={[
        'Bem-estar',
        'Repressão',
        'Resistência',
        'Estresse',
        'Liberdade',
        'Desordem',
        'Indiferença',
        'Relaxamento',
        'Tédio',
        'Socialização',
        'Insegurança',
        'Exclusão',
        'Descaso',
        'Diversidade',
        'Diversão'
      ]}
      onChange={newValue => onChange(9,newValue)}
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

export default Survey9
