import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState('');
  const [warningText, setWarningText] = useState('');

  const handleChange = (e) => {
    let newText = e.target.value;

      setText(newText);
      if(newText.includes('<script>')){
        setWarningText('No script tag allowed!');
        
        newText = newText.replace('<script>', '')
      } else if(newText.includes('@')){
        setWarningText('No @ allowed!');
         
          newText = newText.replace('@', '')
        }
      
      setText(newText);
    }
  

  return (
    <div className="textarea">  
    <textarea 
    value={text}
    onChange={handleChange} 
    placeholder="Enter text here"/>
    { warningText ? <Warning warningText={warningText} /> : null }
    </div>

  )
}
