const Choice = ({children, onClick, isSelected}) =>
  <div onClick={onClick}>
    {children}
    <style jsx>{`
      div {
        padding: 12px;
        background: ${isSelected ? 'red' : '#bfbfbf' };
        cursor: pointer;
        color: white;
        font-weight: 600;
        margin: 4px 30px;
        transition: .2s background;
        max-width: 230px
      }
    `}</style>
  </div>

export default Choice
