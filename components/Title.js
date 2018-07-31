import React from 'react'

const Title = ({children}) =>
  <div className="navigation-color">
    {children}
    <style jsx>{`
      div {
        font-size: 27px;
        line-height: 1.5em;
        font-weight: 900;
        max-width: 980px;
        transition: .5s color;
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
