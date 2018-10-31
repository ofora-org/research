const Choice = ({children, onClick, isSelected}) =>
  <div onClick={onClick} className={`choice-item ${isSelected && 'selected'}`}>
    {children}
    <style jsx>{`
      div {
        padding: 0.4em 0.6em;
        background: #787878;
        cursor: pointer;
        color: white;
        font-weight: 600;
        margin: 4px 5px;
        transition: .2s background;
        max-width: 210px;
        line-break: loose;
      }
    `}</style>
  </div>

export default Choice
