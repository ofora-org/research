import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import SingleChoice from 'components/Choice/SingleChoice'

const Survey6 = (props) =>
  <ContentWrapper
    left={<Content {...props} />}
    right={<Image />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title><span className='title'>Com qual gênero você se identifica?</span></Title>
    <Subtitle>Selecione uma opção!</Subtitle>
    <SingleChoice
      other='Outro, me identifico como:'
      choices={[
        'Mulher',
        'Homem',
        'Homem trans',
        'Mulher trans',
        'Travesti',
        'Não binário'
      ]}
      onChange={itemValue => onChange(6,itemValue)}
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
        background-image: url('/static/image1.jpg');
        background-size: cover;
        background-position: center center;
      }
    }
  `}</style>
</div>

export default Survey6
