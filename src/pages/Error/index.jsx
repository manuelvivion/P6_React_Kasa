// import created components :
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Link } from 'react-router-dom'; //react links

//--------
function Error() { // full page as component imported in router
  return (
    <div>
      <Header /> {/* use of header component */}
      <main className="error-main">
        <h2>404</h2>
        <h3>Oups! La page que vous demandez n'existe pas</h3>
        <div className="error-main-link">
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>

      </main>
      <Footer /> {/* use of footer component */}
    </div>
  );
}

export default Error;