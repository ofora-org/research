import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import MultipleChoice from 'components/Choice/MultipleChoice'

const Survey9 = () =>
  <ContentWrapper
    left={<Content />}
  />

const Content = () =>
  <div className='content'>
    <Title><span className='title'>Quais palavras melhor representam sua experiência nos espaços públicos de convívio* de São Paulo?</span></Title>
    <Subtitle>Selecione as três melhores opções pra você!</Subtitle>
    <MultipleChoice
      max={3}
      other='Outros:'
      choices={[
        'Bem-Estar',
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

export default Survey9
