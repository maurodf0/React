export default function Stats() {
  return (
    <>
  <section class="stats">

    <Stat start_number={0} label={'Words'}/>
    <Stat start_number={0} label={'Words'}/>
    <Stat start_number={280} label={'Instagram'} />
    <Stat start_number={2200} label={'Facebook'} />

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
