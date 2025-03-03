import { useState} from 'react'
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from './data/db'

function App() {

    //state
    //inicio el state como un arreglo vacio
    const [data, setData] = useState(db)
    const [cart, setCart] = useState([])

    function addToCart(item) {

        //retorna la posicion del indice en el arreglo si no -1
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)
        if(itemExists >= 0) { //existe en el carrito
            const updateCart = [...cart]
            updateCart[itemExists].quantity++ //se actualiza para q si le doy agregar guitarra agregue mas
            setCart(updateCart)
        } else {
            item.quantity = 1 //CANTIDAD 1 la primera q pone alpresinar el boton agregar
            setCart([...cart, item])
        }
    }

  return (
    <>

{//ASI COMENTO en jsx Y DE PASO ASI LLAMO UN COMPONENTE EN OTRO
}
    <Header 
    cart={cart}
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
