import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import SingleChoice from 'components/Choice/SingleChoice'


const Survey27 = props =>
  <ContentWrapper
    left={<Content {...props} />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title><span className='title'>Avaliação da Pesquisa</span></Title>
    <Subtitle>Por favor, ajude a melhorar a pesquisa com as respostas a seguir:</Subtitle>
    <p>Você achou a pesquisa longa demais?</p>
    <SingleChoice
      choices={['Não']}
      onChange={itemValue => onChange(27, {...value, 1: itemValue})}
      value={value && value[1]}
      other='Sim'
      otherPlaceholder='Comente a duração'
    />
    <p>Achou algo estranho, invasivo e/ou descabido?</p>
    <SingleChoice
      choices={['Não']}
      onChange={itemValue => onChange(27, {...value, 2: itemValue})}
      value={value && value[2]}
      other='Sim'
      otherPlaceholder='Comente incômodos'
    />
    <p>Teve dificuldade para entender alguma palavra?</p>
    <SingleChoice
      choices={['Não']}
      onChange={itemValue => onChange(27, {...value, 3: itemValue})}
      value={value && value[3]}
      otherPlaceholder='Comente a linguagem'
      other='Sim'
    />
    <p>Você teve algum problema técnico ou funcional?</p>
    <SingleChoice
      choices={['Não']}
      onChange={itemValue => onChange(27, {...value, 4: itemValue})}
      value={value && value[4]}
      otherPlaceholder='Comente o manuseio'
      other='Sim'
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

export default Survey27
