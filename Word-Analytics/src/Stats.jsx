export default function Stats({stats}) {
  return (
    <>
  <section class="stats">

    <Stat start_number={stats.numberofWords} label={'Words'}/>
    <Stat start_number={stats.numberOfCharacters} label={'Chatacters'}/>
    <Stat start_number={stats.instagramCharacters} label={'Instagram'} />
    <Stat start_number={stats.facebookCharacters} label={'Facebook'} />

      </section>
    </>

  );
}

function Stat({start_number, label}) {
  return (
   
      <section className="stat">
            <span className={`stat__number ${start_number < 0 ? 'stat__number--limit' : 'null'}`}>{start_number}</span>
            <h2 className="second-heading">{label}</h2>
        </section>

  )
}
