const Choice = ({children, onClick, isSelected}) =>
  <div onClick={onClick}>
    {children}
    <style jsx>{`
      div {
        padding: 20px;
        background: ${isSelected ? 'red' : '#bfbfbf' };
        cursor: pointer;
        color: white;
        font-weight: bold;
        margin: 5px 30px;
        transition: .2s background;
      }
    `}</style>
  </div>

export default Choice
