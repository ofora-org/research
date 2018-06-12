import React from 'react'
import { withState, withHandlers, lifecycle, compose } from 'recompose'
import fetch from 'isomorphic-unfetch'

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
import Survey19 from 'components/survey/Survey19'
import Survey20 from 'components/survey/Survey20'
import Survey21 from 'components/survey/Survey21'

const Index = ({onChangeHandler, onNavigateHandler, value, setValue}) =>
  <div className='page-wrapper'>
    <Head />
    <div className='logo'><Logo /></div>
    <div style={{pointerEvents: 'none', position: 'fixed', right: 0, zIndex: 10}}>{formatValue(value)}</div>
    <Navigation
      onNavigate={onNavigateHandler}
      canNavigateRight={i => i < 2 || value[`${i+1}`]}
      children={[
        <Survey1 />,
        <Survey2 />,
        <Survey3 onChange={onChangeHandler} value={value['3']} />,
        <Survey4 onChange={onChangeHandler} value={value['4']} />,
        <Survey5 onChange={onChangeHandler} value={value['5']} />,
        <Survey6 onChange={onChangeHandler} value={value['6']} />,
        <Survey7 onChange={onChangeHandler} value={value['7']} />,
        <Survey8 onChange={onChangeHandler} value={value['8']} />,
        <Survey9 onChange={onChangeHandler} value={value['9']} />,
        <Survey10 onChange={onChangeHandler} value={value['10']} />,
        <Survey11 onChange={onChangeHandler} value={value['11']} />,
        <Survey12 onChange={onChangeHandler} value={value['12']} />,
        <Survey13 onChange={onChangeHandler} value={value['13']} />,
        <Survey14 onChange={onChangeHandler} value={value['14']} />,
        <Survey15 onChange={onChangeHandler} value={value['15']} />,
        ...(value[14] && (value[14] === '1 vez a cada 2 semanas' || value[14] === '1 vez por mês ou menos') ? [<Survey16 />] : []),
        ...(value[10] && value[10].includes('Visito') ? [<Survey17 />] : []),
        ...(value[10] && value[10].includes('Visito') ? [<Survey18 />] : []),
        <Survey19 onChange={onChangeHandler} value={value['19']} />,
        <Survey20 onChange={onChangeHandler} value={value['20']} />,
        <Survey21 onChange={onChangeHandler} value={value['21']} />
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
  withHandlers({
    onChangeHandler: ({setValue, value}) => (i, itemValue) => {
      const nextValue = {...value, [String(i)]: itemValue}
      setValue(nextValue)
      window.localStorage.setItem("entryValue", JSON.stringify(nextValue))
    },
    onNavigateHandler: ({value, setValue}) => (currentScreen, nextScreen) => {
      if (nextScreen < 2 || nextScreen < currentScreen) return
      const nextValue = {...value}
      nextValue[`${nextScreen+1} start`] = value[`${nextScreen+1} start`] ?
        value[`${nextScreen+1} start`] :
        new Date().toISOString()
      setValue(nextValue)
      window.localStorage.setItem("entryValue", JSON.stringify(nextValue))
      fetch('/api/save', {
        body: JSON.stringify(nextValue),
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
  }),
  lifecycle({
    componentDidMount() {
      const entryId = window.localStorage.getItem("entryId")
      const entryValue = JSON.parse(window.localStorage.getItem("entryValue"))
      entryValue && this.props.setValue(entryValue)
      console.log(entryValue)
    },
  })
)(Index)


const formatValue = (value) =>
  Object.keys(value).map((key, index) =>
    <div>{key} : {formatItemValue(value[key])}</div>)

const formatItemValue = (itemValue) =>
  itemValue && Array.isArray(itemValue) ?
    itemValue.map(item => <div>{item}</div>) :
    <div>{itemValue}</div>
