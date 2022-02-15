

function ItemListContainer(props) {
  console.log(props);
  return (
    <h2 class="font-sans text-xl font-bold text-sky-400 hover:text-sky-700 mt-20 border-blue">{props.greeting}</h2>
  )
}

export default ItemListContainer