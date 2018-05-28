import React from 'react'
import Head from 'components/Head'
import { Logo } from 'components/Icons'
import Navigation from 'components/Navigation'
import Survey1 from 'components/survey/Survey1'
import Survey2 from 'components/survey/Survey2'
import Survey3 from 'components/survey/Survey3'
import Survey4 from 'components/survey/Survey4'
import Survey5 from 'components/survey/Survey5'
import Survey6 from 'components/survey/Survey6'
import Survey7 from 'components/survey/Survey7'
import Survey8 from 'components/survey/Survey8'
import Survey9 from 'components/survey/Survey9'
import Survey10 from 'components/survey/Survey10'
import Survey11 from 'components/survey/Survey11'
import Survey12 from 'components/survey/Survey12'

const Index = () =>
  <div className='page-wrapper'>
    <Head />
    <div className='logo'><Logo /></div>
    <Navigation>
      <Survey1 />
      <Survey2 />
      <Survey3 />
      <Survey4 />
      <Survey5 />
      <Survey6 />
      <Survey7 />
      <Survey8 />
      <Survey9 />
      <Survey10 />
      <Survey11 />
      <Survey12 />
    </Navigation>
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
      .content-wrapper {
        min-width: 100%;
      }
      .content-wrapper > div {
        flex: 1;
        padding: 20px;
      }
      @media only screen and (min-width: 720px) {
        .logo {
          top: 45px;
          width: 114px;
        }
      }
    `}</style>
  </div>

export default Index
