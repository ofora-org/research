import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import MultipleChoice from 'components/Choice/MultipleChoice'

const Survey20 = (props) =>
  <ContentWrapper
    left={<Content {...props} />}
  />

const Content = ({onChange, value}) =>
  <div className='content'>
    <Title><span className='title'>Quais meios de transporte você costuma usar para circular em São Paulo?</span></Title>
    <Subtitle>Pode selecionar várias opções:</Subtitle>
    <MultipleChoice
      choices={[
        'Ando a pé',
        'Bicicleta',
        'Skate',
        'Moto (própria/emprestada)',
        'Carro (próprio/emprestado)',
        'Carona (veículos diversos)',
        'Uber/táxi (semelhantes)',
        'Ônibus',
        'Metrô',
        'Trem'
      ]}
      other='Outros, qual?'
      onChange={itemValue => onChange(20,itemValue)}
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

export default Survey20
