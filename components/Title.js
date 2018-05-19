import React from 'react'

const Title = ({children}) =>
  <div>
    {children}
    <style jsx>{`
      div {
        font-size: 26px;
        font-weight: bold;
      }
      @media only screen and (min-width: 720px) {
        div {
          font-size: 41px;
        }
      }
    `}</style>
  </div>

export default Title
