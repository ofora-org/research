import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'

const Survey29 = (props) =>
  <ContentWrapper
   left={<Content {...props} />}
   right={<Image />}
  />

const Content = ({value, onChange, onButtonClick}) =>
  <div className='content'>
    <div className='background' />
    <Title><span className='title'>Acabou, valeu, obrigado!</span></Title>
    <p>Sua contribuição foi fundamental para o Fora!</p>
    <p>Siga para o <a href="https://ofora.org/">site</a>, <a href="https://facebook.com/">Facebook</a> ou <a href="https://instagram.com/">Instagram.</a></p><br />
    <input type='text' placeholder='email' onChange={e => onChange(29, e.target.value)} />
    <div><a onClick={onButtonClick}>enviar</a></div>
    <style jsx>{`
      .background {
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        background: #dc0596;
        z-index: -1;
      }
      a {
        box-shadow: 0px -4px 0px 0px yellow inset;
        height: 25px;
        display: inline-block;
      }
      .content {
        display: flex;
        flex-direction: column;
        max-height: 100%;
        color: white;
      }
      .title {
        padding-right: 90px;
        display: block;
        font-size: 35px;
        color: white;
        line-height: 1.2em
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
