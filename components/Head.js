import React from 'react'
import Head from 'next/head'

const CustomHead = () =>
  <div>
    <Head>
      <title>Pesquisa Fora</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#ededed' />
      <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' />
      {/*<meta property='og:type' content='article' />*/}
      <meta property='og:title' content='Pesquisa Fora' />
      <meta property='og:image' content='' />
      <meta property='og:description' content='Descrição para Pesquisa Fora' />
    </Head>
      <style jsx global>{`
        html, body, #__next {
          height: 100%;
        }
        body {
          margin: 0;
          background: #ededed;
          font-family: 'Source Sans Pro', sans-serif;
        }
        img {
          max-width: 100%;
        }
        h1, h2, h3, h4, h5 {
          font-weight: inherit;
          font-size: inherit;
        }
        a {
          text-decoration: none;
          color: inherit;
          fill: inherit;
          cursor: pointer;
        }
        a:visited { color: inherit; }
        a:focus, input:focus { outline: none; }
        @media only screen and (min-width: 720px) {
          body {
            min-width: 960px;
          }
        }
      `}
    </style>
  </div>

export default CustomHead
