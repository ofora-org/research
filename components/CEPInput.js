import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import InputMask from 'react-input-mask';

const CEPInput = ({children, value, handleChange}) =>
  <div className='root'>
    <div>
      <div><InputMask mask="99999-999" maskChar="" placeholder='00000-000' /></div>
      <a href='http://www.buscacep.correios.com.br/sistemas/buscacep/' target='_blank'>Buscar CEP</a>
    </div>
    <style jsx>{`
      .root {

      }
      a {
        font-size: 16px;
        display: block;
      }
    `}</style>
  </div>

export default compose(
  withState('value', 'setValue', ''),
  withHandlers({
    handleChange: ({value, setValue, onChange}) => e => {
      const country = e.target.name === 'country' ? e.target.value : value.country
      const state = e.target.name === 'state' ? e.target.value : value.state
      const newValue = {country, state}
      setValue(newValue)
      onChange && onChange(newValue)
    }
  })
)(CEPInput)
