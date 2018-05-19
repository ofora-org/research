import React from 'react'
import Head from 'components/Head'
import { Logo } from 'components/Icons'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import Survey1 from 'components/survey/Survey1'
import Survey2 from 'components/survey/Survey2'
import ContentWrapper from 'components/ContentWrapper'

const Index = () =>
  <div className='page-wrapper'>
    <Head />
    <div className='logo'><Logo /></div>
    <div className='navigation-wrapper'>
      <Survey1 />
      <Survey2 />
    </div>
    <style jsx>{`
      .page-wrapper,
      .navigation-wrapper,
      .content-wrapper {
        height: 100%;
      }
      .logo {
        position: fixed;
        width: 72px;
        right: 20px;
        top: 29px;
        z-index: 1000;
      }
      .navigation-wrapper {
        display: flex;
      }
      .content-wrapper {
        min-width: 100%;
      }
      .content-wrapper > div {
        flex: 1;
        padding: 20px;
      }
      @media only screen and (min-width: 720px) {
        .logo {
          top: 35px;
          width: 114px;
        }

      }
    `}</style>
  </div>

export default Index
