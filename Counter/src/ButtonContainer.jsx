export default function ButtonContainer({children}) {
 return (
        <div className="button-container">
          {/* children will search for the Btn in the main parent of the react dom */}
          {children}
        </div>
 );
}

