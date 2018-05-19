import React from 'react'

const Subtitle = ({children}) =>
  <p>
    {children}
    <style jsx>{`
      @media only screen and (min-width: 720px) {
        p {
          font-size: 21px;
        }
      }
    `}</style>
  </p>

export default Subtitle
