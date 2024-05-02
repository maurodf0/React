export default function Button({buttonType, children, onClick}) {
  return (
    <button 
    //accettiamo la props come evento del button
    onClick={onClick}
    className={`btn ${buttonType === 'secondary' ? 'btn--secondary' : ''}`}>
      {children} 
    </button>
  )
}
