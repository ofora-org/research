import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import Choice from './Choice'
import Other from './Other'

const MultipleChoice = ({
  other,
  choices,
  handleClick,
  handleChange,
  value,
  ...props
}) =>
  <div className='wrapper'>
    {choices.map((choice, i) =>
      <Choice
        key={choice}
        isSelected={value && value.indexOf(choice) !== -1}
        onClick={()=>handleClick(choice)}
      >
        {choice}
      </Choice>
    )}
    {other ?
      <Other
        label={other}
        onClick={()=>handleClick((value && value.find(el => choices.indexOf(el) < 0) || ''))}
        onChange={handleChange}
        isSelected={value && typeof value.find(el => choices.indexOf(el) < 0) === 'string'}
        value={value && value.find(el => choices.indexOf(el) < 0)}
      /> : null
    }
    <style jsx>{`
      div {
        display: flex;
        flex-flow: column wrap;
        align-items: flex-start;
      }
      @media only screen and (min-width: 960px) {
        div {
          padding: 0 1.5em
        }
      }
    `}</style>
  </div>

export default compose(
  withHandlers({
    handleClick: ({
      max,
      value,
      onChange
    }) => choice => {
      const isSelected = value && value.includes(choice)
      if (!isSelected && value && max === value.length) return
      const newValue = isSelected ?
         value.filter((filterChoice) => filterChoice !== choice) :
         value ? [...value, choice] : [choice]
      onChange && onChange(newValue)
    },
    handleChange: ({value, choices, onChange}) => itemValue => {
      const currentValue = value.find(el => choices.indexOf(el) < 0)
      const pos = value.indexOf(currentValue)
      const newValue = [...value]
      newValue[pos] = itemValue
      onChange && onChange(newValue)
    }
  })
)(MultipleChoice)
