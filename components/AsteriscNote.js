import React from 'react'

const AsteriscNote = ({children}) =>
  <p>
    {children}
    <style jsx>{`
      p {
        font-size: 14px;
        color: #bfbfbf;
        margin-top: .4em;
      }
      @media only screen and (min-width: 720px) {
        p {
          font-size: 16px;
          padding-left: 3px;
          position: absolute;
          bottom: 10px;
          padding-right: 250px;
        }
      }
      @media only screen and (min-width: 960px) {
        p {
          padding-left: 3px;
          font-size: 1.333em;
        }
      }
    `}</style>
  </p>

export default AsteriscNote
