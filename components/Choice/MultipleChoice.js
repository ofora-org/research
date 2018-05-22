import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import Choice from './Choice'
import Other from './Other'

const MultipleChoice = ({handleClick, selected, ...props}) =>
  <div className='wrapper'>
    {props.choices.map((choice, i) =>
      <Choice
        key={i}
        isSelected={selected.indexOf(i) !== -1}
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
  withState('selected', 'setSelected', []),
  withHandlers({
    handleClick: ({setSelected, selected}) => i => {
      const pos = selected.indexOf(i);
      pos === -1 ?
        setSelected([...selected, i]) :
        setSelected(selected.filter((_, filterPos) => filterPos !== pos))
    },
  })
)(MultipleChoice)
