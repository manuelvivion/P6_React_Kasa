// import created components :
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Collapse from '../../components/Collapse';
import TagList from '../../components/TagList';
import Rating from '../../components/Rating';
import Carousel from '../../components/Carousel';
//----------

//import React hooks
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom' //useParams to get the id transmitted in the url

//import datas from JSOn file : list of houses
import listJson from '../../data/logements.json';

function Fiche() { // full page as component imported in router
  const navigate = useNavigate(); // route to page 404 if incorect house id
  const { idLogement } = useParams(); //id of the selected house, in url (as string)
  let selectedHouse = [];
  selectedHouse = listJson.filter((house) => (house.id === idLogement));

  //console.log(selectedHouse.length);
  useEffect(() => { //on load, detect incorrect house id -> go to page 404
    if (selectedHouse.length === 0) {
      navigate("/incorrect-houseid"); // force route to page 404
    }
  })//





  function makeList(tableau) { //collapse component expect prop as string, equipments we want to show is an array
    let listEquipment = "";
    tableau.map((equipment) => (listEquipment += `- ${equipment} \n`)); //every equipment of the original array is concat to the empty string (the array becomes a string)
    // '\n' will be managed by css, to show string in multiple lines, as expected (white-space: pre-line;) to be working

    return listEquipment;
  }

  function makeTwoLines(name) { //show first name and last name on 2 lines
    let nomPrenom = name.replace(" ", "\n"); //we replace white space " " character, between first and last name, by special \n
    // \n will be managed in css to split the string on 2 lines 
    return nomPrenom;
  }

  return (
    <div>
      <Header /> {/* use of header component */}
      <main>
        {selectedHouse.map((house) => ( // we map an array of ONLY 1 house
          <article key={`${house.id}`} className="main-container-fiche"> {/* full fiche rendered as an html article */}

            <div className="fiche-top"> {/* fiche-top contains the carousel */}
              <Carousel images={house.pictures} className="fiche-carousel" />
            </div> {/* end of fiche top */}

            <div className="fiche-bottom"> {/* fiche bottom shows all other informations ,including 2 collpases component */}
              <div className="fiche-place-tags"> {/* Place infos on the left, name+portrait on the right */}
                <div className="place">
                  <h2>{house.title}</h2>
                  <h3>{house.location}</h3>
                </div>
                <div className="tags">
                  <TagList tags={house.tags} />
                </div>

              </div>

              <div className="fiche-name-rating"> {/* list of tags on the left, Rating stars on the right */}
                <div className="host-name">
                  <img src={house.host.picture} alt={house.title} />
                  <p>{makeTwoLines(house.host.name)}</p>
                </div>

                <div className="rating">
                  <Rating rate={+house.rating} /> {/* "+" added to convert string to number */}
                </div>
              </div>
            </div> {/* end of fiche bottom */}


            <div className="fiche-collapses">
              <div className="collapse"> {/* Additionnal div is necessary to add a classname and manage CSS (collapse element already have his own css) */}
                <Collapse title="Description" infos={house.description} page="fiche" />
              </div>
              <div className="collapse">
                <Collapse title="Equipements" infos={makeList(house.equipments)} page="fiche" />
              </div>
            </div>




          </article> // end of article 
        ))}


      </main>

      <Footer /> {/* use of footer component */}
    </div>
  );
}

export default Fiche;