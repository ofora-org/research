import React from 'react'
import ContentWrapper from 'components/ContentWrapper'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import SpRegionInput from 'components/SpRegionInput'

const Survey19 = () =>
  <ContentWrapper
    left={<Content />}
  />

const Content = () =>
  <div className='content'>
    <Title><span className='title'>Por onde você circula em São Paulo?</span></Title>
    <Subtitle>No mapa de Prefeitura Regionais de São Paulo, selecione quais regiões você frequenta em geral, mesmo que seja uma aproximação! Pode selecionar várias regiões!</Subtitle>
    <SpRegionInput />
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
          padding-right: 140px;
        }
      }
    `}</style>
  </div>

export default Survey19
