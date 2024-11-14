//importar el state: con el hook useState: tambien el hook de useEffect
import { useState, useEffect } from 'react'

import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from './data/db'

function App() {

  //el hoke de state siempre va aqui
  //no se pueden tener hooks de forma condicional, en un if, pues da error, no pueden estar en un loop ni en una iteracion solo estar en la parte de arriba y ya. tampoco hooks dentro de funciones
  //el state se llama en este caso data, y la funcion q lo modifica setData

  const [data, setData] = useState([]) //se inicia con arreglo vacio como para traer datos de una API

  useEffect(() => {
    setData(db)
  }, [])


  //uso de useEffect: tiene un callback dentro
  //aca dentro si se puede colocoar un if, pero los hooks siguen arriba nunca aqui adentro
  //useEffect(() => {
  //  console.log('componente listo o escuchando por auth')
  //}, [auth]) //si se le pasa un arreglo vacio es q no tiene dependencias y solo se ejecuta una vez cuando el componente este slito



  
  return (
    <>

    <Header /> {/* renderizar el componente Header */}

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            <Guitar/>
            <Guitar/>
            <Guitar/>
            <Guitar/>
            <Guitar/>
            <Guitar/>
            <Guitar/>
            

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
