import React from 'react'
import Head from 'components/Head'
import Title from 'components/Title'

const Index = () =>
  <div className='root'>
    <Head />
    <div className='page-wrapper'>
      <div>
        <Title>O Fora precisa te ouvir!</Title>
        <p>Vem compartilhar como você se sente nos espaços públicos de São Paulo.</p>
      </div>
      <div />
    </div>
    <style jsx>{`
      .root,
      .page-wrapper {
        height: 100%;
      }
      .page-wrapper > div {
        flex: 1;
        padding: 20px;
      }
      @media only screen and (min-width: 720px) {
        .page-wrapper {
          display: flex;
        }
        .page-wrapper > div:last-child {
          background-image: url('/static/intro1.jpg');
          background-size: cover;
          background-position: center center;
        }
        .page-wrapper > div:first-child {
          background-image: none;
        }
      }
    `}</style>
  </div>

export default Index
