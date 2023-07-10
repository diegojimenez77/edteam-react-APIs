import { NavLink } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    return(
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/criptomonedas">Lista de Cryptomonedas</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu