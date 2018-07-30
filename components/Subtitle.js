import React from 'react'

const Subtitle = ({children}) =>
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
        }
      }
      @media only screen and (min-width: 960px) {
        p {
          padding-left: 3px;
        }
      }
    `}</style>
  </p>

export default Subtitle
