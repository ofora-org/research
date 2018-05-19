import React from 'react'
import { withState, withHandlers, lifecycle, compose } from 'recompose'

const enhance = compose(
  withState('currentScreen', 'setScreen', 0)
)

const Navigation = ({children, currentScreen, setScreen}) =>
  <div className='wrapper'>
    <div className='navigationWrapper'>
      {children}
    </div>
    <div className='control'>
      <span className='left' onClick={() => setScreen(0)}>←</span>
      <span className='right' onClick={() => setScreen(1)}>→</span>
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
        ransition: .6s transform;
        transform: translateX(-${currentScreen*100}%)
      }
      .control {
        font-family: arial;
        position: fixed;
        right: 20px;
        bottom: 20px;
        font-size: 80px;
      }
    `}</style>
  </div>

export default enhance(Navigation)
