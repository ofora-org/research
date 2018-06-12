import React from 'react'
import { withState, withHandlers, compose } from 'recompose'

const enhance = compose(
  withState('currentScreen', 'setScreen', 0),
  withHandlers({
    onLeftClickHandler: ({currentScreen, setScreen, onNavigate}) => () => {
      const nextScreen = currentScreen-1
      setScreen(nextScreen)
      onNavigate && onNavigate(currentScreen, nextScreen)
    },
    onRightClickHandler: ({currentScreen, setScreen, onNavigate}) => () => {
      const nextScreen = currentScreen+1
      setScreen(nextScreen)
      onNavigate && onNavigate(currentScreen, nextScreen)
    }
  })
)

const Navigation = ({children, currentScreen, onRightClickHandler, onLeftClickHandler, canNavigateRight}) =>
  <div className='wrapper'>
    <div className='navigationBar' />
    <div className='navigationWrapper'>
      {children}
    </div>
    <div className='control'>
      {currentScreen !== 0 ?
        <span className='left' onClick={onLeftClickHandler}>←</span>
      : null}
      {(currentScreen !== children.length-1) && canNavigateRight(currentScreen) ?
        <span className='right' onClick={onRightClickHandler}>→</span>
      : null}
    </div>
    <style jsx>{`
      .wrapper {
        height: 100%;
        width: 100%;
      }
      .navigationBar {
        position: fixed;
        left: 0;
        top: 0;
        height: 15px;
        background: red;
        width: ${(currentScreen+1)/children.length*100}%;
        z-index: 900;
        transition: 1.3s width 0.1s;
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
        transition: .5s right;
      }
      .control > span {
        padding: 0 10px
      }
      @media only screen and (min-width: 720px) {
        .wrapper {
          overflow: hidden;
        }
        .control {

        }
      }
    `}</style>
  </div>

export default enhance(Navigation)
