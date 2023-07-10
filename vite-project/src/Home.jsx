import { Link } from "react-router-dom"

const Home = () => {
    return(
        <>
            <h1>Hola, Bienvenido a CryptoMKT</h1>
            <p>Listamos el top 100 de Criptomonedas</p>
            <Link to="/criptomonedas">Ver Criptos</Link>
        </>
    )
}

export default Home