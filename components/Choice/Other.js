import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import Choice from './Choice'

const Other = ({handleClick, handleFocus, handleBlur, selected, label}) =>
  <div>
    <div><div>
      <Choice onClick={handleClick} isSelected={selected}>
        {label}
      </Choice>
    </div></div>
    <input type='text' onFocus={handleFocus} onBlur={handleBlur} />
    <style jsx>{`
      div > div > div {
        display: inline-block;
      }
      input {
        padding: 10px;
        opacity: ${selected ? '1' : '0'};
        margin: 5px 30px;
        transition: .2s opacity .1s;
      }
    `}</style>
  </div>

export default compose(
  withState('selected', 'setSelected', false),
  withHandlers({
    handleClick: ({setSelected, selected}) => e => {
      const input = e.target.parentElement.parentElement.nextSibling
      if (!selected) {
        input.focus()
        return setSelected(true)
      }
      input.value = ''
      setSelected(false)
    },
    handleFocus: ({setSelected, selected}) => e => {
      const input = e.target
      !selected && setSelected(true)
    },
    handleBlur: ({setSelected, selected}) => e => {
      const input = e.target
      input.value === '' && setTimeout(()=>setSelected(false), 200)
    }
  })
)(Other)
