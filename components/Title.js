import React from 'react'

const Title = ({children}) =>
  <div>
    {children}
    <style jsx>{`
      div {
        font-size: 29px;
        font-weight: 900;
      }
      @media only screen and (min-width: 720px) {
        div {
          font-size: 47px;
        }
      }
    `}</style>
  </div>

export default Title
