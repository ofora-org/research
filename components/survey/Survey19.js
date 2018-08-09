import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import SpRegionInput from 'components/SpRegionInput'
import MultipleChoice from 'components/Choice/MultipleChoice'
import { withState, withHandlers, compose } from 'recompose'

const Survey19 = (props) =>
  <ContentWrapper
    left={<LeftContent {...props} />}
    right={<RightContent {...props} />}
    midpoint={0.75}
  />

const LeftContent = ({onChoiceChange, onChange, value}) =>
  <div className='content'>
    <Title><span className='title'>Por quais regiões de São Paulo você circula?</span></Title>
    <Subtitle>Clique nas Subprefeituras para aparecerem marcadas no mapa abaixo. Pode selecionar várias opções:</Subtitle>
    <MultipleChoice
      choices={[
        "Parelheiros",
        "Capela do Socorro",
        "Jaçanã/Tremembé",
        "M'Boi Mirim",
        "Perus",
        "Butantã",
        "Pirituba",
        "São Mateus",
        "Penha",
        "Lapa",
        "Ipiranga",
        "Campo Limpo",
        "Santana/Tucuruvi",
        "Freguesia do Ó",
        "Cidade Ademar",
        "Vila Maria",
        "Casa Verde",
        "São Miguel",
        "Itaim Paulista",
        "Vila Prudente",
        "Guaianases",
        "Ermelino Matarazo",
        "Cidade Tiradentes",
        "Sapopemba",
        "Jabaquara",
        "Santo Amaro",
        "Mooca",
        "Pinheiros",
        "Vila Mariana",
        "Sé",
        "Itaquera",
        "Aricanduva"
      ]}
      onChange={itemValue => onChange(19,itemValue)}
      value={value}
    />
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
        max-height: 100%;
      }
      .title {
        padding-right: 90px;
        display: block;
      }
      @media only screen and (min-width: 720px) {
        .title {
          padding-right: 0px;
        }
        .content {
          font-size: .7em;
        }
      }
      @media only screen and (min-width: 960px) {
        .title {
          padding-right: 0px;
        }
        .content {
          font-size: 1em;
        }
      }
    `}</style>
  </div>

const RightContent = ({value}) =>
  <div className='content'>
    <SpRegionInput selected={value} />
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
        max-height: 100%;
      }
    `}</style>
  </div>

export default compose(
  withState('selected', 'setSelected', []),
  withHandlers({
    onChoiceChange: ({onChange}) => selected => {
      onChange && onChange(19,selected)
    }
  })
)(Survey19)
