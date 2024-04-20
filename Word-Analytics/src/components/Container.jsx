import Stats from "./Stats";
import Textarea from "./Textarea";
import { useState } from "react";
import { FACEBOOK_MAX, INSTAGRAM_MAX } from "../lib/costants.js";

export default function Container() {
  const [text, setText] = useState('');

  
  const stats = {
    numberOfCharacters: text.length,
    numberofWords: text.split(/\s/).filter(word => word !== '').length,
    instagramCharacters: INSTAGRAM_MAX - text.length,
    facebookCharacters: FACEBOOK_MAX - text.length,
  }



  return (
    <main className="container">
      <Textarea text={text} setText={setText}/>
      <Stats stats={stats}/>
    </main>
  )
}

