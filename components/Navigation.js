import React from 'react'
import { withState, withHandlers, compose, withProps, lifecycle } from 'recompose'
import Swipeable from 'react-swipeable'

const getScreenColor = screen => {
  if (screen < 4) return '#FF001D'
  if (screen < 9) return '#FF7401'
  return '#0009FF'
}

const getLogoColor = screen => {
  if ([0,5,9,13].includes(screen)) return 'transparent'
  if ([1].includes(screen)) return '#FF001D'
  if ([27].includes(screen)) return '#E00884'
  return 'white'
}

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
  }),
  withProps(
    ({canNavigateRight, currentScreen, children}) => ({
      canNavigateRight: canNavigateRight(children[currentScreen].key || currentScreen),
      color: getScreenColor(children[currentScreen].key || currentScreen)
    })
  ),
  lifecycle({
    componentDidMount() {
      this.handleKeyDown = e => {
        e.keyCode === 37 && this.props.onLeftClickHandler()
        e.keyCode === 39 && this.props.canNavigateRight && this.props.onRightClickHandler()
      }
      document.addEventListener('keydown', this.handleKeyDown)
    },
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown)
    }
  })
)

const Navigation = ({children, currentScreen, onRightClickHandler, onLeftClickHandler, canNavigateRight, color}) =>
<Swipeable
  onSwipedLeft={canNavigateRight && onRightClickHandler}
  onSwipedRight={currentScreen !== 0 && onLeftClickHandler}
>
  <div className='wrapper'>
    <div className='navigationBar' />
    <div className='navigationWrapper'>
      {children}
    </div>
    <div className='control'>
      {currentScreen !== 0 ?
        <span className='left' onClick={onLeftClickHandler}>←</span>
      : null}
      {(currentScreen !== children.length-1) ?
        <span className='right' onClick={onRightClickHandler}>→</span>
      : null}
    </div>
    <style jsx global>{`
      .choice-item.selected {
        background: ${color};
      }
      input,
      textarea,
      .navigation-color {
        color: ${color}
      }
      
      @media only screen and (min-width: 720px) {
        .choice-item:hover {
          background: ${color};
        }
      }
      .logo-color {
        fill: ${getLogoColor(currentScreen)}
      }
    `}</style>
    <style jsx>{`
      .wrapper {
        height: 100%;
        width: 100%;
        overflow: hidden;
      }
      .navigationBar {
        position: fixed;
        left: 0;
        top: 0;
        height: 15px;
        background: ${color};
        width: ${(currentScreen+1)/children.length*100}%;
        z-index: 900;
        transition: 1.3s width 0.1s, 1.5s background;
      }
      .navigationWrapper {
        display: flex;
        height: 100%;
        transition: .6s transform;
        transform: translateX(-${currentScreen*100}%);
      }
      .control {
        font-family: arial;
        position: fixed;
        right: ${currentScreen === 0 ? '50%' : '20px'};
        transform: translateX(${currentScreen === 0 ? '50%' : '0'});
        bottom: 20px;
        font-size: 80px;
        transition: .5s right .2s;
        color: #bfbfbf;
      }
      .control .right {
        color: ${canNavigateRight && color};
        pointer-events: ${!canNavigateRight && 'none'};
        cursor: ${!canNavigateRight && 'auto'}
      }
      .control .left:hover {
        color: black;
      }
      .control > span {
        padding: 0 10px;
        cursor: pointer;
      }
      @media only screen and (min-width: 720px) {
        .wrapper {

        }
        .control {

        }
      }
    `}</style>
  </div>
</Swipeable>

export default enhance(Navigation)
