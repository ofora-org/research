import React from 'react'

const Subtitle = ({children}) =>
  <p>
    {children}
    <style jsx>{`
      @media only screen and (min-width: 720px) {
        p {
          font-size: 16px;
          color: #bfbfbf;
          margin-top: .5em;
          padding-left: 3px;
        }
      }
    `}</style>
  </p>

export default Subtitle
