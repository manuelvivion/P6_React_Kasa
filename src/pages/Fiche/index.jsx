import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import listJson from '../../data/logements.json';

function Fiche() {

  const [housesList, setHousesList] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState([]);
  const { idLogement } = useParams();
  

   useEffect(() => {
      setHousesList(listJson)
      setSelectedHouse(housesList.filter((house)=> (house.id === idLogement)));
      /* housesList.map((house)=>(
        house.id === idLogement?setSelectedHouse([house]):null
        
        )) */
   }, [idLogement, housesList])


    return (
     <div> 
      <Header/>
        <main>
        {selectedHouse.map((house)=>(
          <div key={`${house.id}`}>
          <p>{house.title}</p>
          <p>{house.descrition}</p>
          <p>{house.host.name}</p>
          <p>{house.rating}</p>
          <p>{house.location}</p>
          <p>{house.tags}</p>
          <p>{house.equipments}</p>

          </div>
          ))}
            
          
        </main>
      <Footer/>
     </div>
    );
  }
  
  export default Fiche;