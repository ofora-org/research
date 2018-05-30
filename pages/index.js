import React from 'react'
import { withState, compose } from 'recompose'

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
import Survey13 from 'components/survey/Survey13'
import Survey14 from 'components/survey/Survey14'
import Survey15 from 'components/survey/Survey15'
import Survey16 from 'components/survey/Survey16'
import Survey17 from 'components/survey/Survey17'
import Survey18 from 'components/survey/Survey18'


const Index = ({value, setValue}) =>
  <div className='page-wrapper'>
    <Head />
    <div className='logo'><Logo /></div>
    <Navigation
      children={[
        <Survey1 onChange={value=>setValue({...value, 1: value})} />,
        <Survey2 onChange={value=>setValue({...value, 2: value})} />,
        <Survey3 onChange={value=>setValue({...value, 3: value})} />,
        <Survey4 onChange={value=>setValue({...value, 4: value})} />,
        <Survey5 onChange={value=>setValue({...value, 5: value})} />,
        <Survey6 onChange={value=>setValue({...value, 6: value})} />,
        <Survey7 onChange={value=>setValue({...value, 7: value})} />,
        <Survey8 onChange={value=>setValue({...value, 8: value})} />,
        <Survey9 onChange={value=>setValue({...value, 9: value})} />,
        <Survey10 onChange={value=>setValue({...value, 10: value})} />,
        <Survey11 onChange={value=>setValue({...value, 11: value})} />,
        <Survey12 onChange={value=>setValue({...value, 12: value})} />,
        <Survey13 onChange={value=>setValue({...value, 13: value})} />,
        <Survey14 onChange={value=>setValue({...value, 14: value})} />,
        <Survey15 onChange={value=>setValue({...value, 15: value})} />,
        ...(value[14] && (value[14] === '1 vez a cada 2 semanas' || value[14] === '1 vez por mês ou menos') ? [<Survey16 onChange={value=>setValue({...value, 16: value})} />] : []),
        ...(value[10] && value[10].includes('Visito') ? [<Survey17 onChange={value=>setValue({...value, 17: value})} />] : []),
        ...(value[10] && value[10].includes('Visito') ? [<Survey18 onChange={value=>setValue({...value, 18: value})} />] : []),
      ]}
    />
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
      @media only screen and (min-width: 720px) {
        .logo {
          top: 45px;
          width: 114px;
        }
      }
    `}</style>
  </div>

export default compose(
  withState('value', 'setValue', {}),
)(Index)

//...(value[10] && value[10].includes('Moro') ? [<Survey13 onChange={value=>setValue({...value, 13: value})} />] : []),
