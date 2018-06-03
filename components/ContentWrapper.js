import React from 'react'

const ContentWrapper = ({left, right, midpoint}) =>
  <div className='content-wrapper'>
    <div>
      {left}
    </div>
    {right ? <div>{right}</div> : null}
    <style jsx>{`
      .content-wrapper {
        min-width: 100%;
        font-size: 21px;
        font-weight: 300;
      }
      .content-wrapper > div {
        flex: 1;
        padding: 20px;
        padding-top: 35px;
        position: relative;
      }
      .content-wrapper > div:first-child {
        min-height: 50vh;
        box-sizing: border-box;
        flex: ${midpoint ? midpoint*2 : 1}
      }
      @media only screen and (min-width: 720px) {
        .content-wrapper {
          display: flex;
        }
      }
    `}</style>
  </div>

export default ContentWrapper
