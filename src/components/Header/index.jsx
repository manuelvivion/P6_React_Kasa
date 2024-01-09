import { Link } from 'react-router-dom'; //react links
import logoKasa from '../../images/logo-kasa.png'; // import Kasa logo

//import Redux helpers
import { useSelector} from "react-redux";
import { getFavoriteQty } from "../../selectors";

function Header() {

    let count = useSelector(getFavoriteQty);

    return (
        <header>
            <img src={logoKasa} alt="logo Kasa"/>
            <nav>
                <Link to="/">Accueil</Link> {/* link = <a> */}
                <Link to="/about">A Propos</Link>
                <Link to="/">Favoris {count>0?<span className="count-badge">{count}</span>:null}</Link> {/* link = <a> */}
            </nav>
        </header>
    )
}

export default Header