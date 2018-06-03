import React from 'react'
import { withState, compose } from 'recompose'

const enhance = compose(
  withState('currentScreen', 'setScreen', 0)
)

const Navigation = ({children, currentScreen, setScreen}) =>
  <div className='wrapper'>
    <div className='navigationBar' />
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
