import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import SingleChoice from 'components/Choice/SingleChoice'
import AsteriscNote from '../AsteriscNote';

const Survey1 = (props) =>
  <ContentWrapper
    left={<Content {...props} />}
  />

const Content = ({onChange, value}) =>
  <div className='content'>
    <Title><span className='title'>Qual a importância dos espaços públicos de convívio* para sua vida na cidade?</span></Title>
    <Subtitle>Indique o grau na escala!</Subtitle>
    <SingleChoice
      choices={['Toda', 'Muita', 'Média', 'Pouca', 'Nenhuma']}
      onChange={itemValue => onChange(3,itemValue)}
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

export default Survey1
