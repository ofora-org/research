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
import Survey23 from 'components/survey/Survey23';
import Survey24 from 'components/survey/Survey24';
import Survey25 from 'components/survey/Survey25';
import Survey26 from 'components/survey/Survey26';
import Survey27 from 'components/survey/Survey27';
import Survey28 from 'components/survey/Survey28';
import Survey29 from 'components/survey/Survey29';

const Index = ({onChangeHandler, onNavigateHandler, value, setValue}) =>
  <div className='page-wrapper'>
    <Head />
    <div className='logo logo-color'><Logo /></div>
    <Navigation
      onNavigate={onNavigateHandler}
      canNavigateRight={i => i < 3 || ['15', '16', '18', '21', '28'].includes(i) || value[`${i}`]}
      children={[
        <Survey1 key={1}/>,
        <Survey2 key={2}/>,
        <Survey3 onChange={onChangeHandler} key={3} value={value['3']} />,
        <Survey4 onChange={onChangeHandler} key={4} value={value['4']} />,
        <Survey5 onChange={onChangeHandler} key={5} value={value['5'] ? value['5'] : {}} />,
        <Survey6 onChange={onChangeHandler} key={6} value={value['6']} />,
        <Survey7 onChange={onChangeHandler} key={7} value={value['7']} />,
        <Survey9 onChange={onChangeHandler} key={9} value={value['9']} />,
        <Survey10 onChange={onChangeHandler} key={10} value={value['10']} />,
        <Survey11 onChange={onChangeHandler} key={11} value={value} />,
        ...(value[10] && !value[10].includes('Moro') ? [<Survey17 onChange={onChangeHandler} key={17} value={value['17']} />] : []),
        ...(value[10] && !value[10].includes('Moro') ? [<Survey18 onChange={onChangeHandler} key={18} value={value['18']} />] : []),
        <Survey12 onChange={onChangeHandler} key={12} value={value} />,
        <Survey13 onChange={onChangeHandler} key={13} value={value['13']} />,
        <Survey14 onChange={onChangeHandler} key={14} value={value['14']} />,
        <Survey15 onChange={onChangeHandler} key={15} value={value['15']} />,
        ...(value[14] && (value[14] !== '5 a 7 vezes por semana') ? [<Survey16 onChange={onChangeHandler} key={16} value={value['16']} />] : []),
        <Survey19 onChange={onChangeHandler} key={19} value={value['19']} />,
        <Survey20 onChange={onChangeHandler} key={20} value={value['20'] ? value['20'] : {} } />,
        <Survey21 onChange={onChangeHandler} key={21} value={value['21']} />,
        <Survey26 onChange={onChangeHandler} key={26} value={value['26']} />,
        <Survey27 onChange={onChangeHandler} key={27} value={value['27']} />,
        <Survey28 onChange={onChangeHandler} key={28} value={value['28']} />,
        <Survey29 onChange={onChangeHandler} key={29} value={value['29']} onButtonClick={()=>onNavigateHandler(29,29)}/>
      ]}
    />
    <style jsx>{`
      .page-wrapper,
      .navigation-wrapper,
      .content-wrapper {
        height: 100%;
        overflow: hidden;
      }
      .logo {
        position: fixed;
        width: 70px;
        right: 20px;
        top: 36px;
        z-index: 1000;
      }
      @media only screen and (min-width: 799px) {
        .logo {
          top: 38px;
          width: 90px;
        }
      }
      @media only screen and (min-width: 960px) {
        .logo {
          right: 40px;
          width: 114px;
        }
      }
    `}</style>
  </div>

export default compose(
  withState('value', 'setValue', {} ),
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
    <div>{JSON.stringify(itemValue)}</div>
