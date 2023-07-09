import { useEffect, useState } from "react";

function App() {

  const API_URL = import.meta.env.VITE_API_URL;
  const [criptos, setCriptos] = useState();

  useEffect (() => {
    fetch(`${API_URL}assets`) //una promesa puede tener dos resultados, exito, then o error .catch
    .then((resp) => resp.json())
    .then((data) => {
      setCriptos(data.data)
    })
    .catch(() => {
      console.error("La peticion fallo")
    })
  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de Criptormonedas</h1>
      <ol>
        { criptos.map(({id, name, priceUsd})=> (
          <li key={id}> Nombre: {name} Precio: {priceUsd}</li>
        ))}
      </ol>
    </>
  )
}

export default App
