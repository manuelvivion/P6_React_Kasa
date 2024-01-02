import { Link } from 'react-router-dom';
import logoKasa from '../../images/logo-kasa.png';

function Header() {
    return (
        <header>
            <img src={logoKasa} alt="logo Kasa"/>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>
        </header>
    )
}

export default Header