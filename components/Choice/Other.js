import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import Choice from './Choice'

const Other = ({handleClick, onChange, isSelected, value, label, placeholder}) =>
  <div>
    <div><div>
      <Choice onClick={handleClick} isSelected={isSelected}>
        {label}
      </Choice>
    </div></div>
    <input
      type='text'
      value={value}
      onChange={e=>onChange(e.target.value)}
      placeholder={placeholder}
    />
    <style jsx>{`
      div > div > div {
        display: inline-block;
      }
      input {
        padding: 10px;
        opacity: ${isSelected ? '1' : '0'};
        margin: 5px;
        transition: .2s opacity .1s;
      }
    `}</style>
  </div>

export default compose(
  withHandlers({
    handleClick: ({onClick, isSelected}) => e => {
      const input = e.target.parentElement.parentElement.nextSibling
      !isSelected && input.focus()
      onClick && onClick(e)
    }
  })
)(Other)
