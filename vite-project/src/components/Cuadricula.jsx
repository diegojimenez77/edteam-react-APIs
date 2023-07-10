import { useEffect, useState } from "react";
import axios from "axios";
import "./Cuadricula.css"
import Cripto from "./cripto/Cripto";

function Cuadricula() {

  const API_URL = import.meta.env.VITE_API_URL;
  const [criptos, setCriptos] = useState();

  useEffect (() => {
    axios.get(`${API_URL}assets`) //una promesa puede tener dos resultados, exito, then o error .catch
    .then((data) => {
      console.log(data)
      setCriptos(data.data.data)
    })
    .catch(() => {
      console.error("La peticion fallo")
    })
  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <div className="app-container">
      <h1>Lista de Criptomonedas</h1>
        <div className="cripto-container">
          { 
            criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
              <Cripto 
                Key={id} 
                name={name} 
                priceUSD={priceUsd} 
                symbol={symbol} 
                changePercent24Hr={changePercent24Hr} 
                id={id}
                />
            ))
          }
        </div>
    </div>
  )
}

export default Cuadricula
