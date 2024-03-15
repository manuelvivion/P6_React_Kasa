// import created components :
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
//-------

//Import React Hooks
import { useEffect, useState } from 'react'

import imgBanner from '../../images/banner-img-1.png'; //backgroun image for the banner

//import Datas from Json file :  list of houses
import listJson from '../../data/logements.json';

function Home() { // full page as component imported in router

   const bannerText = "Chez vous,\n partout et ailleurs";


   const [housesList, setHousesList] = useState([])

   useEffect(() => {
      setHousesList(listJson)
   }, [])



   return (
      <div>
         <Header /> {/* use of header component */}
         <main>
            <Banner imgSrc={imgBanner} bannerText={bannerText} darken={true} /> {/* Banner with background picture and caption */}
            <div className="main-container-home">
               {housesList.map((house) => ( //for every house of the database
                  <Card //we create a clickable card
                     key={house.id}
                     imgSrc={house.cover}
                     title={house.title}
                     id={house.id} // with props
                  />
               ))}

            </div>
         </main>
         <Footer /> {/* use of footer component */}
      </div>
   );
}

export default Home;