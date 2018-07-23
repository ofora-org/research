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
    <Subtitle>Por favor, seja sincero e ajude a melhorar a pesquisa! Obrigada!</Subtitle>
    <p>Você achou a pesquisa longa demais?</p>
    <SingleChoice
      choices={['Não']}
      onChange={itemValue => onChange(27, {...value, 1: itemValue})}
      value={value && value[1]}
      other='Sim'
      otherPlaceholder='Comente sobre a duração'
    />
    <p>Você achou alguma pergunta e/ou opções de resposta estranha, invasiva e/ou descabida?</p>
    <SingleChoice
      choices={['Não']}
      onChange={itemValue => onChange(27, {...value, 2: itemValue})}
      value={value && value[2]}
      other='Sim'
      otherPlaceholder='Comente sobre seus incômodos'
    />
    <p>Você teve dificuldade para entender alguma palavra ou termo que foi usado?</p>
    <SingleChoice
      choices={['Não']}
      onChange={itemValue => onChange(27, {...value, 3: itemValue})}
      value={value && value[3]}
      otherPlaceholder='Comente sobre a linguagem'
      other='Sim'
    />
    <p>Você teve algum problema técnico ou funcional para mexer na ferramenta?</p>
    <SingleChoice
      choices={['Não']}
      onChange={itemValue => onChange(27, {...value, 4: itemValue})}
      value={value && value[4]}
      otherPlaceholder='Comente sobre o manuseio'
      other='Sim'
    />

    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
        max-height: 100%;
        width: 60%;
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
