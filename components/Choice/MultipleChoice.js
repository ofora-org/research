import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import Choice from './Choice'
import Other from './Other'

const MultipleChoice = ({
  other,
  choices,
  selected,
  otherValue,
  setOtherValue,
  handleClick,
  ...props
}) =>
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
    {other ?
      <Other
        label={other}
        onClick={()=>handleClick(choices.length)}
        onChange={value=>setOtherValue(value)}
        isSelected={selected.indexOf(choices.length) !== -1}
        value={otherValue}
      /> : null
    }
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
  withState('otherValue', 'setOtherValue', ''),
  withHandlers({
    handleClick: ({choices, setSelected, selected, setOtherValue}) => i => {
      const pos = selected.indexOf(i);
      if (pos === -1) {
        setSelected([...selected, i])
      } else {
        setSelected(selected.filter((_, filterPos) => filterPos !== pos))
        if (i === choices.length) setOtherValue('')
      }
    },
  })
)(MultipleChoice)
