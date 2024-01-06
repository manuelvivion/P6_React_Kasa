// import created components :
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
//-------
import imgBanner from '../../images/banner-img-2.png'; //backgroun image for the banner

function About() { // full page as component imported in router

  let listRubriques =[]; //List created to fullfil 4 differents collapses component

  listRubriques.push({
    title : "Fiabilité",
    infos : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
  });

  listRubriques.push({
    title : "Respect",
    infos : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  });

  listRubriques.push({
    title : "Service",
    infos : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  });

  listRubriques.push({
    title : "Sécurité",
    infos : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  });

    return (
    
     <div>
     <Header/>{/* use of header component */}
          <main > 
               <Banner imgSrc={imgBanner} bannerText=""/> {/* Banner with background picture and caption */}
              <div className="main-container-about"> {/* styled in 'style.scss' */}
                  { listRubriques.map((rub,index) => (
                    <Collapse key={index} title={rub.title} infos={rub.infos} />
                  ))}
              </div>
          
          </main>
     <Footer/> {/* use of footer component */}
     </div>
    );
  }
  
  export default About;