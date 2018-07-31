import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import MultipleChoice from 'components/Choice/MultipleChoice'

const Survey10 = (props) =>
  <ContentWrapper
    left={<Content {...props} />}
    right={<Image />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title><span className='title'>O que você faz na cidade de São Paulo?</span></Title>
    <Subtitle>Pode selecionar mais de uma opção:</Subtitle>
    <MultipleChoice
      choices={[
        'Moro',
        'Trabalho',
        'Estudo',
        'Visito'
      ]}
      onChange={itemValue => onChange(10,parseChoices(value, itemValue))}
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

const Image = () =>
<div className='image'>
  <style jsx>{`
    @media only screen and (min-width: 720px) {
      .image {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background-image: url('/static/image2.jpg');
        background-size: cover;
        background-position: center center;
      }
    }
  `}</style>
</div>


export default Survey10

const parseChoices = (choices, newChoices) => {
  if (!choices) return newChoices
  const addedChoice = newChoices.filter(x => !choices.includes(x))
  if (addedChoice.includes("Moro")) {
    return newChoices.filter(x => x !== "Visito")
  }
  if (addedChoice.includes("Visito")) {
    return newChoices.filter(x => x !== "Moro")
  }
  return newChoices
}