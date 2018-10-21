import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import CEPInput from 'components/CEPInput'

const Survey11 = (props) =>
  <ContentWrapper
   left={<Content {...props} />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title><span className='title'>Qual seu CEP?</span></Title>
    <Subtitle>Não se preocupe, não dá para achar seu endereço completo pelo CEP, ele serve apenas para indicar aproximadamente a área da cidade que você mora.</Subtitle>
    <br />
    <div className='formGroup'>
      <label className='navigation-color'>Meu CEP é:</label>
      <CEPInput onChange={e => onChange(11,{ ...value[11], cep: e.target.value })} value={value['11'] && value['11'].cep} />
    </div>
    <div className='formGroup'>
      <label className='navigation-color'>{value['10'] && value['10'].includes('Moro') ?  'Nome do bairro:' : 'Nome da cidade:' }</label>
      <input
        type='text'
        maxLength={60}
        placeholder={value['10'] && value['10'].includes('Moro') ? 'Bairro/Área' : 'Cidade (UF)' }
        onChange={e => onChange(11,{ ...value[11], city: e.target.value })}
        value={value['11'] && value['11'].city}
      />
    </div>
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
        font-weight: bold;
      }
      @media only screen and (min-width: 720px) {
        .title {
          padding-right: 140px;
        }
      }
    `}</style>
  </div>

export default Survey11
