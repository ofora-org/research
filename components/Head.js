import React from 'react'
import Head from 'next/head'

const CustomHead = () =>
  <div>
    <Head>
      <title>Como você vive o lado de Fora?</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#ededed' />
      <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,900' rel='stylesheet' />
      {/*<meta property='og:type' content='article' />*/}
      <meta property='og:title' content='Pesquisa Fora' />
      <meta property='og:image' content='' />
      <meta property='og:description' content='Descrição para Pesquisa Fora' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" user-scalable='no' />
      <link rel='icon' type='image/png' sizes='16x16' href='https://ofora.org/static/favicon-16x16.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='https://ofora.org/static/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='64x64' href='https://ofora.org/static/favicon-64x64.png' />
    </Head>
      <style jsx global>{`
        html, body, #__next {
          height: 100%;
        }
        body {
          margin: 0;
          background: #ededed;
          font-family: 'Source Sans Pro', sans-serif;
          font-weight: normal;
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
        svg path {
          transition: .4s fill;
        }
        a:visited { color: inherit; }
        a:focus, input:focus, textarea:focus { outline: none; }
        input,
        select {
          font-size: inherit;
          font-weight: 600;
          font-family: inherit;
          color: inherit;
          background: none;
          border: none;
          margin: 0;
          font-size: 1.3em;
        }
        select {
          color: #828282;
        }
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #828282;
            opacity: 1; /* Firefox */
        }
        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: white;
        }
        ::-ms-input-placeholder { /* Microsoft Edge */
            color: white;
        }
        @media only screen and (min-width: 720px) {
          body {
            min-width: 790px;
            min-height: 450px;
          }
        }
        button {
          border: none;
          background: transparent;
          font-size: inherit;
          font-family: inherit;
          padding: 0;
        }
        textarea {
          background: none;
          border: none;
          font-weight: bold;
          max-width: 970px;
          resize: none;
          font-size: 1.3em;
        }
        input[type="text"] {
          width: 100%;
        }
      `}
    </style>
  </div>

export default CustomHead
