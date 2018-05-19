import React from 'react'
import { withState, withHandlers, lifecycle, compose } from 'recompose'

const enhance = compose(
  withState('currentScreen', 'setScreen', 0),
  // withHandlers({
  //   onClickLeft: ({ children, setScreen, currentScreen }) => e => {
  //     currentScreen === children.length ?
  //   },
  //   onClickRight: props => e => {
  //
  //   }
  // })
)

const Navigation = ({children, currentScreen, setScreen}) =>
  <div className='wrapper'>
    <div className='navigationWrapper'>
      {children}
    </div>
    <div className='control'>
      {currentScreen !== 0 ?
        <span className='left' onClick={() => setScreen(currentScreen-1)}>←</span>
      : null}
      {currentScreen !== children.length-1 ?
        <span className='right' onClick={() => setScreen(currentScreen+1)}>→</span>
      : null}
    </div>
    <style jsx>{`
      .wrapper {
        height: 100%;
        width: 100%;
        overflow: hidden;
      }
      .navigationWrapper {
        display: flex;
        height: 100%;
        transition: .6s transform;
        transform: translateX(-${currentScreen*100}%)
      }
      .control {
        font-family: arial;
        position: fixed;
        right: ${currentScreen === 0 ? '50%' : '20px'};
        transform: translateX(${currentScreen === 0 ? '50%' : '0'});
        bottom: 20px;
        font-size: 80px;
        cursor: pointer;
      }
      .control > span {
        padding: 0 10px
      }
    `}</style>
  </div>

export default enhance(Navigation)
