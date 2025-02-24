import { useState} from 'react'
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from './data/db'

function App() {

    //state
    //inicio el state como un arreglo vacio
    const [data, setData] = useState(db)

    console.log(db);

  return (
    <>

    <Header /> {//ASI COMENTO en jsx Y DE PASO ASI LLAMO UN COMPONENTE EN OTRO
            }

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((guitar) => ( //omitimos el return porq esta implicito, ya q siempre hay un return para mostrar html
                <Guitar
                //el kEY SIEMPRE SE USA CUANDO UNO ITERE UNA LISTA
                    Key={guitar.id} //se le pasa un key con un valor q no se repita, en este caso id
                    guitar={guitar}//esto es un prop, prop q se llama guitar con el nombre del objeto del map guitar
                    
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
