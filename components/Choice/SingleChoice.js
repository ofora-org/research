import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import Choice from './Choice'
import Other from './Other'

const SingleChoice = ({
  value,
  onChange,
  choices,
  other
}) =>
  <div className='wrapper'>
    {choices.map((choice, i) =>
      <Choice
        key={choice}
        isSelected={value === choice}
        onClick={()=>onChange(choice)}
      >
        {choice}
      </Choice>
    )}
    {other ?
      <Other
        label={other}
        onClick={()=>onChange('')}
        onChange={value=>onChange(value)}
        isSelected={value && !choices.includes(value)}
        value={value}
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
  withState('selected', 'setSelected', null),
  withState('otherValue', 'setOtherValue', ''),
  withHandlers({
    handleClick: ({setSelected, otherValue, setOtherValue, choices, onChange}) => choice => {
      //setSelected(i)
      console.log(this)
      //if (i !== choices.length) setOtherValue('')
      //onChange && onChange(i === choices.length ? otherValue : choices[i])
    }
  })
)(SingleChoice)
