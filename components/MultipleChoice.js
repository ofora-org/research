import React from 'react'
import { withState, withHandlers, compose } from 'recompose'

const enhance = compose(
  withState('selected', 'setSelected', []),
  withHandlers({
    handleClick: ({setSelected, selected}) => i => {
      const pos = selected.indexOf(i);
      pos === -1 ?
        setSelected([...selected, i]) :
        setSelected(selected.filter((_, filterPos) => filterPos !== pos))
    },
  })
)

const MultipleChoice = ({choices, handleClick, selected}) =>
  <div className='wrapper'>
    {choices.map((choice, i) =>
      <Choice
        key={i}
        isSelected={selected.indexOf(i) !== -1}
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

const Choice = ({children, onClick, isSelected}) =>
  <div onClick={onClick}>
    {children}
    <style jsx>{`
      div {
        padding: 20px;
        background: ${isSelected ? 'red' : '#bfbfbf' };
        cursor: pointer;
        color: white;
        font-weight: bold;
        margin: 5px 30px;
      }
    `}</style>
  </div>

export default enhance(MultipleChoice)
