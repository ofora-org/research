import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import Choice from './Choice'
import Other from './Other'

const SingleChoice = ({choices, handleClick, selected, ...props}) =>
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
    {props.other ? <Other label={props.other} /> : null}
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
