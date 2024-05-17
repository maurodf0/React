import { useState } from "react";
import { MAX_CHARS } from "../lib/constants";

export default function FeedbackForm() {

  const [text, setText] = useState('');
  const charsLeft = MAX_CHARS - text.length;
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
          
         if( newText.length > MAX_CHARS){
            return;
        }

          setText(e.target.value)
  }

  return (
  <form className="form">
    <textarea 
      value={text}
      id="feedback-textarea" 
      placeholder="Tricky" 
      spellCheck={false}
      onChange={handleChange}
    />
    <label htmlFor="feedback-textarea">
      Enter your feedback here, remember to #hashtag the company
    </label>
    <div>
      <p className="u-italic">{charsLeft}</p>
      <button><span> SUBMIT </span></button>
    </div>
  </form>
  );
}
