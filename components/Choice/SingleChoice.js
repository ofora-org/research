import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import Choice from './Choice'

const SingleChoice = ({choices, handleClick, selected}) =>
  <div className='wrapper'>
    {choices.map((choice, i) =>
      <Choice
        key={i}
        isSelected={selected === i}
        onClick={()=>handleClick(i)}
      >
        {choice}
      </Choice>
    )}
    <style jsx>{`
      div {
        display: flex;
        flex-flow: column wrap;
        align-items: flex-start;
      }
    `}</style>
  </div>

export default compose(
  withState('selected', 'setSelected', null),
  withHandlers({
    handleClick: ({setSelected}) => i => {
      setSelected(i)
    },
  })
)(SingleChoice)
