export default function Counter({totalNumberOfItems, numberOfItemsPacked}) {

  return (
    <div>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </div>
  )
}
