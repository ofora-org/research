import React from 'react'
import { withState, withHandlers, compose } from 'recompose'

const Title = ({children, value: { state, country }, onChange}) =>
  <div className='root'>
    <select name='state' defaultValue="Estado" className={state && 'selected'} selected={state ? state : "Estado"} onChange={e => onChange({country, state: e.target.value})}>
      <option disabled value="Estado">Lista de opções</option>
      <option value="SP">Fora do Brasil</option>
      <option value="SP">São Paulo</option>
      <option value="AC">Acre</option>
      <option value="AL">Alagoas</option>
      <option value="AP">Amapá</option>
      <option value="AM">Amazonas</option>
      <option value="BA">Bahia</option>
      <option value="CE">Ceará</option>
      <option value="DF">Distrito Federal</option>
      <option value="ES">Espírito Santo</option>
      <option value="GO">Goiás</option>
      <option value="MA">Maranhão</option>
      <option value="MT">Mato Grosso</option>
      <option value="MS">Mato Grosso do Sul</option>
      <option value="MG">Minas Gerais</option>
      <option value="PA">Pará</option>
      <option value="PB">Paraíba</option>
      <option value="PR">Paraná</option>
      <option value="PE">Pernambuco</option>
      <option value="PI">Piauí</option>
      <option value="RJ">Rio de Janeiro</option>
      <option value="RN">Rio Grande do Norte</option>
      <option value="RS">Rio Grande do Sul</option>
      <option value="RO">Rondônia</option>
      <option value="RR">Roraima</option>
      <option value="SC">Santa Catarina</option>
      <option value="SE">Sergipe</option>
      <option value="TO">Tocantins</option>
    </select>
    <style jsx>{`
      .root {
        display: flex;
      }
      .root > div:first-child {
        margin-right: 20px;
      }
      select {
        -webkit-appearance: none;
        -webkit-user-select: none;
        background: none;
        padding: 5px;
        border: none;
        border-bottom: 2px solid #828282;
        font-family: inherit;
        font-size: inherit;
        outline: none;
      }
    `}</style>
  </div>

export default Title
