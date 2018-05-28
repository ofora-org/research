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
  handleChange,
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
        onChange={handleChange}
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
    handleClick: ({
      max,
      choices,
      setSelected,
      selected,
      otherValue,
      setOtherValue,
      onChange
    }) => i => {
      const pos = selected.indexOf(i)
      const isSelected = pos !== -1
      if (isSelected && max && max === selected.length) return
      const newSelected = isSelected ?
        selected.filter((_, filterPos) => filterPos !== pos) :
        [...selected, i]
      const newOtherValue = isSelected && i === choices.length ? '' : otherValue
      setSelected(newSelected)
      setOtherValue(newOtherValue)
      onChange && onChange(newSelected.map(i=>i == choices.length ? otherValue : choices[i]))
    },
    handleChange: ({choices, setOtherValue, selected, onChange}) => value => {
      setOtherValue(value)
      onChange && onChange(selected.map(i=>i == choices.length ? value : choices[i]))
    }
  })
)(MultipleChoice)
