import React from 'react'

const ContentWrapper = ({left, right}) =>
  <div className='content-wrapper'>
    <div>
      {left}
    </div>
    {right ? <div>{right}</div> : null}
    <style jsx>{`
      .content-wrapper {
        min-width: 100%;
      }
      .content-wrapper > div {
        flex: 1;
        padding: 20px;
        position: relative;
      }
      .content-wrapper > div:first-child {
        min-height: 50vh;
        box-sizing: border-box;
      }
      @media only screen and (min-width: 720px) {
        .content-wrapper {
          display: flex;
        }
      }
    `}</style>
  </div>

export default ContentWrapper
