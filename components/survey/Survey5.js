import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import CountryAndStateInput from 'components/CountryAndStateInput'

const Survey4 = (props) =>
  <ContentWrapper
    left={<Content {...props}/>}
  />

  const Content = ({value, value: { location, age }, onChange}) =>
  <div className='content'>
    <Title><span className='title'>Em que ano você nasceu?</span></Title>
    <Subtitle>Digite abaixo!</Subtitle>
    <input type='text' maxLength={4} placeholder='0000' value={age} onKeyPress={handleKeyPress} onChange={e => onChange(5, {...value, age: e.target.value})} />
    <Title><span>Onde você nasceu?</span></Title>
    <Subtitle>Selecione uma opção da lista!</Subtitle>
    <CountryAndStateInput value={location ? location : {}} onChange={itemValue => onChange(5, {...value, location: itemValue})} />
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
      input {
        margin-bottom: 20px;
      }
      @media only screen and (min-width: 720px) {
        .title {
          padding-right: 140px;
        }
      }
    `}</style>
  </div>

  const handleKeyPress = e => {
    // Ensure that it is not a number and stop the keypress
    if (['1','2','3','4','5','6','7','8','9','0'].indexOf(e.key) === -1) {
      e.preventDefault();
    }
  }

export default Survey4
