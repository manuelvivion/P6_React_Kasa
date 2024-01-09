import PropTypes from 'prop-types' // typing the props
import { Link } from 'react-router-dom';

// import created components :
import Favorite from '../Favorite';

//selectors for redux :
import { useSelector, useDispatch } from "react-redux";
import { getLike,getFavoriteList } from "../../selectors";

import { favoriteSlice } from "../Favorite/favoriteSlice.js";
    

function Card({imgSrc,title,id}) { // destructuration à la déclaration : cover image, title of the house, id of house in database
   
    const dispatch = useDispatch();
    
    const liked = useSelector(getLike(id))
    const stateList = useSelector(getFavoriteList)

    const handleFavorite = (event) =>{
        dispatch(favoriteSlice.actions.toggleFavorite(id));
        //console.log(stateList)

    }
    return (
        <article className="card-house"> {/* each card declared as html article */}
                <Link to={`/fiche/${id}`}> {/* full card redirect to the correct fiche, thanks to /id */}
                    <img src={imgSrc} alt={title}/> {/* cover image, dark gradient manage in css (gradient in the bg of the article) */}
                    <h2>{title}</h2> {/* H2 will be displayed over the image, relative/position absolute set in CSS */}
                </Link>

                <div className="card-favorite" onClick={handleFavorite}>
                     <Favorite like={liked} />
                </div>
        </article>
        
    )
}

Card.propTypes = { //set the type of the props
    imgSrc: PropTypes.string,
    title: PropTypes.string, 
    id: PropTypes.string.isRequired, //id mandatory
}

Card.defaultProps= { //default props
    title: "Logement vacance", 
    id: "1", 
}


export default Card