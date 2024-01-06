// import created components :
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//--------
function Error() { // full page as component imported in router
    return (
     <div>
     <Header/> {/* use of header component */}
     404 - page introuvable
     <Footer/> {/* use of footer component */}
     </div>
    );
  }
  
  export default Error;