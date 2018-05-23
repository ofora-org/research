import React from 'react'

const Title = ({children}) =>
  <div>
    {children}
    <style jsx>{`
      div {
        font-size: 27px;
        font-weight: 900;
      }
      @media only screen and (min-width: 720px) {
        div {
          font-size: 43px;
        }
      }
    `}</style>
  </div>

export default Title
