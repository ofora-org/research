import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'

const Survey29 = (props) =>
  <ContentWrapper
   left={<Content {...props} />}
   right={<Image />}
  />

const Content = ({value, onChange}) =>
  <div className='content'>
    <Title><span className='title'>Acabou, valeu, obrigado!</span></Title>
    <p>Sua contribuição foi fundamental para o Fora!</p>
    <p>Siga para o <a href="https://ofora.org/">site</a>, <a href="https://facebook.com/">Facebook</a> ou <a href="https://instagram.com/">Instagram.</a></p>
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
        max-height: 100%;
      }
      .title {
        padding-right: 90px;
        display: block;
        font-size: 35px;
      }
      @media only screen and (min-width: 720px) {
        .title {
          padding-right: 140px;
          font-size: 56px;
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
          background-image: url('/static/end1.jpg');
          background-size: cover;
          background-position: center center;
        }
      }
    `}</style>
  </div>

export default Survey29
