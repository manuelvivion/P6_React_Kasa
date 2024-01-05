import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Collapse from '../../components/Collapse';
import TagList from '../../components/TagList';
import Rating from '../../components/Rating';

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

   function makeList(tableau){
    let listEquipment ="";
    tableau.map((equipment)=>(listEquipment+=`- ${equipment} \n`)); // '\n' will be managed by css (white-space: pre-line;) to be working
    
    return listEquipment;
   }

    return (
     <div> 
      <Header/>
        <main>
        {selectedHouse.map((house)=>(
          <div key={`${house.id}`} className="main-container-fiche">

            <div className="fiche-bottom">
                  <div className="fiche-place-name"></div>

                  <div className="fiche-tags-rating">
                    <div className="tags">
                        <TagList tags={house.tags}/> 
                    </div>
                    <div className="rating">
                        <Rating rate={house.rating}/>
                    </div>
                  </div>
                  
                  <div className="fiche-collapses">
                      <div className="collapse"> {/* Additionnal div is necessary to add a classname and manage CSS (collapse element already have his own css) */}
                          <Collapse  title="Description" infos={house.description} />
                      </div>
                      <div className="collapse">
                        <Collapse  title="Equipements" infos={makeList(house.equipments)} />
                      </div>
                  </div>
            </div>

          {/* <p>{house.title}</p>
          <p>{house.descrition}</p>
          <p>{house.host.name}</p>
          <p>{house.rating}</p>
          <p>{house.location}</p>
          <p>{house.tags}</p>
          <p>{house.equipments}</p> */}

          </div>
          ))}
            
          
        </main>
      <Footer/>
     </div>
    );
  }
  
  export default Fiche;