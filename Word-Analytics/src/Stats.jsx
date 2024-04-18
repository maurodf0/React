export default function Stats({numberOfCharacters, numberofWords}) {
  return (
    <>
  <section class="stats">

    <Stat start_number={numberofWords} label={'Words'}/>
    <Stat start_number={numberOfCharacters} label={'Chatacters'}/>
    <Stat start_number={280 - numberOfCharacters} label={'Instagram'} />
    <Stat start_number={2200 - numberOfCharacters} label={'Facebook'} />

      </section>
    </>

  );
}

function Stat({start_number, label}) {
  return (
   
      <section className="stat">
            <span className="stat__number">{start_number}</span>
            <h2 className="second-heading">{label}</h2>
        </section>

  )
}
