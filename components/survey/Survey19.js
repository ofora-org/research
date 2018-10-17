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
        "Parelheiros/Marsilac",
        "Socorro/Grajaú/Cd. Dutra",
        "Jaçanã/Tremembé",
        "M’Boi Mirim/Jrds. Ângela",
        "Perus/Anhanguera",
        "Butantã/Morumbi/V. Sônia",
        "Pirituba/Jaguara/Jaraguá",
        "São Mateus/São Rafael",
        "Penha/V. Matilde/Artur Alvim",
        "Lapa/Barra Funda/Jaguaré/Perdizes",
        "Ipiranga/Cursino/Sacomã",
        "Campo Limpo/V. Andrade",
        "Santana/Tucuruvi/Mandaqui",
        "Freguesia do Ó/Brasilândia",
        "Cd. Ademar/Pedreira",
        "V. Maria/Guilherme/Medeiros",
        "Casa Verde/Cachoeirinha/Limão",
        "São Miguel/V. Jacuí/Jd. Helena",
        "Itaim Paulista/Vila Curuçá",
        "Vila Prudente/São Lucas",
        "Guaianases/Lajeado",
        "E. Matarazzo/Ponte Rasa",
        "Cd. Tiradentes/Iguatemi",
        "Sapopemba",
        "Jabaquara",
        "St. Amaro/Campos Grande e Belo",
        "Mooca/Brás/Pari/Belém/Tatuapé",
        "Pinheiros/Itaim Bibi/Jd. Paulista",
        "Vila Mariana/Saúde/Moema",
        "Sé/Liberdade/S.Cecília/Bela Vista",
        "Itaquera/Pq. Carmo/Cd. Líder",
        "Aricanduva/Carrão/V. Formosa"
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
          font-size: .6em;
        }
      }
      @media only screen and (min-width: 960px) {
        .title {
          padding-right: 0px;
        }
        .content {
          font-size: .7em;
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
        position: relative;
        z-index: -1;
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
