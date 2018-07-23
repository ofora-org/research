import React from 'react'

const Title = ({children}) =>
  <div>
    {children}
    <style jsx>{`
      div {
        font-size: 27px;
        line-height: 1.2em;
        font-weight: 900;
      }
      @media only screen and (min-width: 799px) {
        div {
          font-size: 34px;
        }
      }
      @media only screen and (min-width: 960px) {
        div {
          font-size: 43px;
        }
      }
    `}</style>
  </div>

export default Title
