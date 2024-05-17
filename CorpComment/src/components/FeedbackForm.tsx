import { useState } from "react";
import { MAX_CHARS } from "../lib/constants";

export default function FeedbackForm() {

  const [text, setText] = useState('');
  const charsLeft = MAX_CHARS - text.length;

  return (
  <form className="form">
    <textarea 
      value={text}
      id="feedback-textarea" 
      placeholder="Tricky" 
      spellCheck={false}
      onChange={
        (e) => setText(e.target.value)

      }
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
