import Stats from "./Stats";
import Textarea from "./Textarea";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState('');

  
  const stats = {
    numberOfCharacters: text.length,
    numberofWords: text.split(/\s/).filter(word => word !== '').length,
    instagramCharacters: 280 - text.length,
    facebookCharacters: 2200 - text.length,
  }



  return (
    <main className="container">
      <Textarea text={text} setText={setText}/>
      <Stats stats={stats}/>
    </main>
  )
}

