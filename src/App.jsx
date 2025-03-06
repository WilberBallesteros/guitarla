import { useState} from 'react'
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from './data/db'

function App() {

    //state
    //inicio el state como un arreglo vacio
    const [data, setData] = useState(db)
    const [cart, setCart] = useState([])

    const MAX_ITEMS = 5
    const MIN_ITEMS = 1

    //AGREGAR GUITARRAS AL CARRTO
    function addToCart(item) {

        //retorna la posicion del indice en el arreglo si no -1
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)
        if(itemExists >= 0) { //existe en el carrito
            if(cart[itemExists].quantity >= MAX_ITEMS) return //para q no se pase de la cantidad maxima al darle click en agregar al carrito
            const updateCart = [...cart]
            updateCart[itemExists].quantity++ //se actualiza para q si le doy agregar guitarra agregue mas
            setCart(updateCart)
        } else {
            item.quantity = 1 //CANTIDAD 1 la primera q pone alpresinar el boton agregar
            setCart([...cart, item])
        }
    }

    //ELIMINAR UNA O MAS GUITARRAS DEL CARRITO
    //si usa un parametro en el html se usa un callback
    function removeFromCart(id) {
         setCart(prevCart => prevCart.filter(guitar =>guitar.id !== id)) //elimino la q le di x y dejo las otras
    }

    //INCREMENTAR CANTIDADES
    function increaseQuantity(id) {
        const updateCart = cart.map(item => {
            if(item.id === id && item.quantity < MAX_ITEMS) { //identificamos el elementodonde estamos dando click
                return {
                    ...item, //ekl resto de la guitarra la traigo igual
                    quantity: item.quantity + 1 //la cantidad la modifico, la incrementamos
                }
            }   
            return item //el resto los mantenemos intactos, los de la sotras guitarras
        })
        setCart(updateCart)
    }

    //DECREMENTAR CANTIDADES
    function decraseQuantity(id) {
        const updateCart = cart.map(item => {
            if(item.id === id && item.quantity > MIN_ITEMS) { 
                return {
                    ...item, 
                    quantity: item.quantity - 1 
                }
            }   
            return item //
        })
        setCart(updateCart)
    }

    //LIMPIAR CARRITO AL DARLE CLCK AL BOTON LIMPIAR CARRITO :)
    function clearCart() {
        setCart([])
    }

  return (
    <>

{//ASI COMENTO en jsx Y DE PASO ASI LLAMO UN COMPONENTE EN OTRO
}
    <Header 
    cart={cart}
    removeFromCart={removeFromCart}
    increaseQuantity={increaseQuantity}
    decraseQuantity={decraseQuantity}
    clearCart={clearCart}
    /> 
    
    

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((guitar) => ( //omitimos el return porq esta implicito, ya q siempre hay un return para mostrar html
                <Guitar
                //el kEY SIEMPRE SE USA CUANDO UNO ITERE UNA LISTA
                    key={guitar.id} //se le pasa un key con un valor q no se repita, en este caso id
                    guitar={guitar}//esto es un prop, prop q se llama guitar con el nombre del objeto del map guitar
                    setCart={setCart}
                    addToCart={addToCart}
                    
                />
            ))}
            

        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
