import { Link } from 'react-router-dom'; //react links
import logoKasa from '../../images/logo-kasa.png'; // import Kasa logo

function Header() {
    return (
        <header>
            <img src={logoKasa} alt="logo Kasa"/>
            <nav>
                <Link to="/">Accueil</Link> {/* link = <a> */}
                <Link to="/about">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header