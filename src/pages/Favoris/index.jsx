// import created components :
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
//-------

//Import React Hooks
import { useEffect, useState } from 'react'

//import Redux helpers
import { useSelector} from "react-redux";
import { getFavoritesOnly } from "../../selectors";




//import Datas from Json file :  list of houses
import listJson from '../../data/logements.json';

function Favoris() { // full page as component imported in router

    const favorisOnly = useSelector(getFavoritesOnly);
    const listFavoris = listJson.filter(
        function(house){
            let present = false;
                for (let i = 0 ; i < favorisOnly.length;i++)
                {
                    if(house.id===favorisOnly[i].id){present=true;}
                }
            return present;
         }
        )  
   
    const [housesList, setHousesList] = useState([])

   useEffect(() => {
      setHousesList(listFavoris)
   }, [favorisOnly])
  


   

    return (
     <div>
        <Header/> {/* use of header component */}
            <main> 
            <h1 className="favoris-titre">Vos logements favoris</h1>
            <div className="main-container-home">
               {housesList.map(function(house){ //for every house of the database
                 // console.log(list.filter((spot) => spot.id === house.id)[0].like)
                  return(
                  <Card //we create a clickable card
                     key={house.id}
                     imgSrc={house.cover}
                     title={house.title}
                     id={house.id} // with props
                  />
                  )
               })}

               </div>
            </main>
        <Footer/> {/* use of footer component */}
     </div>
    );
  }
  
  export default Favoris;