import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import InputMask from 'react-input-mask';
import fetch from 'isomorphic-unfetch'

const CEPInput = props =>
  <div className='root'>
    <div>
      <div><InputMask {...props} mask="99999-999" maskChar="" placeholder='00000-000' /></div>
      <a onClick={props.handleSearchCepShow} target='_blank'>Buscar CEP</a>
    </div>
    {props.isSearchCepVisible &&
      <div className='search-cep'>
        <div className='search-cep' onClick={props.handleSearchCepShow} />
        <div className='inner'>
          <h3>Digite a baixo bla bla bla...</h3>
          <input type='text' placeholder='Estado (UF)' size={9} maxLength={2} className='uf' />
          <input type='text' placeholder='Cidade' size={9} className='city' />
          <input type='text' placeholder='Rua' className='street' />
          <div><button onClick={props.handleSearchCepSubmit}>Buscar</button></div>
        </div>
      </div>
    }
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
        z-index: 1;
      }
      .search-cep h3 {
        margin-top: 0
      }
      button {
        margin-top: 1em
      }
    `}</style>
  </div>

export default compose(
  withState('isSearchCepVisible', 'setSearchCepVisible', false),
  withHandlers({
    handleSearchCepSubmit: ({
        setSearchCepVisible,
        onChange
      }) => async e => {
      const uf = document.querySelector('.search-cep input.uf').value
      const city = document.querySelector('.search-cep input.city').value
      const street = document.querySelector('.search-cep input.street').value
      const response = await fetch(`https://viacep.com.br/ws/${uf}/${city}/${street}/json/`)
      const json = await response.json()
      if (json.length === 0) return alert('O endereço não foi encontrado!')
      onChange({target: { value: json[0].cep}})
      setSearchCepVisible(false)
    },
    handleSearchCepShow: ({setSearchCepVisible, isSearchCepVisible}) => e => {
      setSearchCepVisible(!isSearchCepVisible)
    }
  })
)(CEPInput)