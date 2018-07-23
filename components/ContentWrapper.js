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
        font-size: 18px;
        height: 100vh;
        font-weight: 300;
        overflow: hidden;
        overflow-y: scroll;
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
          overflow: hidden;
        }
      }
      @media only screen and (min-width: 960px) {
        .content-wrapper > div {
          padding: 40px;
          font-size: 21px;
        }
      }
    `}</style>
  </div>

export default ContentWrapper
