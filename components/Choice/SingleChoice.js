import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import Choice from './Choice'
import Other from './Other'

const SingleChoice = ({
  choices,
  other,
  selected,
  otherValue,
  setOtherValue,
  handleClick
}) =>
  <div className='wrapper'>
    {choices.map((choice, i) =>
      <Choice
        key={i}
        isSelected={selected === i}
        onClick={()=>{handleClick(i)}}
      >
        {choice}
      </Choice>
    )}
    {other ?
      <Other
        label={other}
        onClick={()=>handleClick(choices.length)}
        onChange={value=>setOtherValue(value)}
        isSelected={selected === choices.length}
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
  withState('selected', 'setSelected', null),
  withState('otherValue', 'setOtherValue', ''),
  withHandlers({
    handleClick: ({setSelected, otherValue, setOtherValue, choices, onChange}) => i => {
      setSelected(i)
      if (i !== choices.length) setOtherValue('')
      onChange && onChange(i === choices.length ? otherValue : choices[i])
    }
  })
)(SingleChoice)
