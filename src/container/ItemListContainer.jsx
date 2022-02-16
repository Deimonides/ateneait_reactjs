

function ItemListContainer(props) {
  console.log(props);
  return (
    <div>
      <h2 class="font-sans text-xl font-bold text-sky-700 hover:text-sky-500 mt-20 border-blue">{props.greeting}</h2>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">

            <div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-sky-100">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block object-scale-down" src={props.imagen}/>
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{props.categ}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Producto 1</h2>
                <p class="mt-1">$1000.00</p>
              </div>
            </div>

            <div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-sky-100">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block object-scale-down" src={props.imagen}/>
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{props.categ}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Producto 2</h2>
                <p class="mt-1">$3000.00</p>
              </div>
            </div>

            <div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-sky-100">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block object-scale-down" src={props.imagen}/>
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{props.categ}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Producto 3</h2>
                <p class="mt-1">$5000.00</p>
              </div>
            </div>

            <div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-sky-100">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block object-scale-down" src={props.imagen}/>
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{props.categ}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Producto 4</h2>
                <p class="mt-1">$10000.00</p>
              </div>
            </div>


           
          </div>
        </div>
      </section>












    </div>
  )
}

export default ItemListContainer