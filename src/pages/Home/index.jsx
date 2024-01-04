import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Card from '../../components/Card';

import { useEffect, useState } from 'react'

import imgBanner from '../../images/banner-img-1.png'; //backgroun image for the banner
import listJson from '../../data/logements.json';

function Home() {

   const bannerText = "Chez vous, partout et ailleurs";

   
   const [housesList, setHousesList] = useState([])

   useEffect(() => {
      setHousesList(listJson)
   }, [])
  
   

    return (
     <div>
        <Header/>
            <main> 
               <Banner imgSrc={imgBanner} bannerText={bannerText}/> {/* Banner with background picture and caption */}
               <div className="main-container-home">
               {housesList.map((house) => (
                  <Card 
                     key={house.id}
                     imgSrc={house.cover}
                     title={house.title}
                     id={house.id} // 
                  />
               ))}

               </div>
            </main>
        <Footer/>
     </div>
    );
  }
  
  export default Home;