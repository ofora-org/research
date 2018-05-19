import React from 'react'

const Title = ({children}) =>
  <div>
    {children}
    <style jsx>{`
      div {
        font-size: 35px;
        padding-right: 100px;
        font-weight: bold;
      }
      @media only screen and (min-width: 720px) {
        div {
          font-size: 56px;
        }
      }
    `}</style>
  </div>

export default Title
