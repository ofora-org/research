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
    <Subtitle>Não se preocupe, não é possível ter seu endereço completo pelo CEP! Serve apenas para saber aproximadamente a área da cidade que você mora!</Subtitle>
    <div className='formGroup'>
      <label>Meu CEP é:</label>
      <CEPInput onChange={e => onChange(11,e.target.value)} value={value} />
    </div>
    <div className='formGroup'>
      <label>Não sei ou não quero dar meu CEP, mas moro em:</label>
      <input type='text' maxLength={60} placeholder='Nome da área/bairro' />
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
      }
      @media only screen and (min-width: 720px) {
        .title {
          padding-right: 140px;
        }
      }
    `}</style>
  </div>

export default Survey11
