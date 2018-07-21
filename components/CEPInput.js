import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import InputMask from 'react-input-mask';

const CEPInput = props =>
  <div className='root'>
    <div>
      <div><InputMask {...props} mask="99999-999" maskChar="" placeholder='00000-000' /></div>
      <a href='http://www.buscacep.correios.com.br/sistemas/buscacep/' target='_blank'>Buscar CEP</a>
    </div>
    <div className='search-cep'>
      <div className='inner'>
        <h3>Digite a baixo bla bla bla...</h3>
        <input type='text' placeholder='Estado (UF)' size={9} />
        <input type='text' placeholder='Cidade' size={9} />
        <input type='text' placeholder='Rua' />
        <div><button onClick={props.handleSearchCepSubmit}>Buscar</button></div>
      </div>
    </div>
    <style jsx>{`
      a {
        font-size: 16px;
        display: block;
      }
      .search-cep {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .search-cep .inner {
        background-color: lightgray;
        padding: 20px;
      }
      .search-cep h3 {
        margin-top: 0
      }
    `}</style>
  </div>

export default compose(
  withState('isSearchCepVisible', 'setSearchCepVisible', false),
  withHandlers({
    handleSearchCepSubmit: () => e => {
      return alert('oi')
    }
  })
)(CEPInput)