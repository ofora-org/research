import React from 'react'

const Title = ({children}) =>
  <div>
    {children}
    <style jsx>{`
      div {
        font-size: 31px;
        padding-right: 100px;
        font-weight: bold;
      }
      @media only screen and (min-width: 720px) {
        div {
          font-size: 42px;
        }
      }
    `}</style>
  </div>

export default Title
