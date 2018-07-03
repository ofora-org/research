import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import InputMask from 'react-input-mask';

const CEPInput = props =>
  <div className='root'>
    <div>
      <div><InputMask {...props} mask="99999-999" maskChar="" placeholder='00000-000' /></div>
      <a href='http://www.buscacep.correios.com.br/sistemas/buscacep/' target='_blank'>Buscar CEP</a>
    </div>
    <style jsx>{`
      a {
        font-size: 16px;
        display: block;
      }
    `}</style>
  </div>

export default CEPInput