import React from 'react'
import Head from 'components/Head'
import { Logo } from 'components/Icons'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'

const Index = () =>
  <div className='page-wrapper'>
    <Head />
    <div className='logo'><Logo /></div>
    <div className='content-wrapper'>
      <div>
        <Title>O Fora precisa te ouvir!</Title>
        <Subtitle>Vem compartilhar como você se sente nos espaços públicos de São Paulo.</Subtitle>
      </div>
      <div />
    </div>
    <style jsx>{`
      .page-wrapper,
      .content-wrapper {
        height: 100%;
      }
      .logo {
        position: fixed;
        width: 72px;
        right: 20px;
        top: 29px;
      }
      .content-wrapper > div {
        flex: 1;
        padding: 20px;
      }
      @media only screen and (min-width: 720px) {
        .content-wrapper {
          display: flex;
        }
        .logo {
          top: 35px;
          width: 114px;
        }
        .content-wrapper > div:last-child {
          background-image: url('/static/intro1.jpg');
          background-size: cover;
          background-position: center center;
        }
        .content-wrapper > div:first-child {
          background-image: none;
        }
      }
    `}</style>
  </div>

export default Index
