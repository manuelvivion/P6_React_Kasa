import { Link, useLocation } from 'react-router-dom'; //react links
import logoKasa from '../../images/logo-kasa.png'; // import Kasa logo

function Header() {

    const location = useLocation();
    const { pathname } = location; // we get the current route to underline the current nav link (with css class)
    return (
        <header>
            <img src={logoKasa} alt="logo Kasa" />
            <nav>
                <Link className={pathname === "/" ? "active-link" : ""} to="/">Accueil</Link> {/* link = <a> */}
                <Link className={pathname === "/about" ? "active-link" : ""} to="/about">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header