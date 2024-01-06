import PropTypes from 'prop-types' // typing the props
import { Link } from 'react-router-dom';


function Card({imgSrc,title,id}) { // destructuration à la déclaration : cover image, title of the house, id of house in database

    return (
        <Link to={`/fiche/${id}`}> {/* full card redirect to the correct fiche, thanks to /id */}
            <article className="card-house"> {/* each card declared as html article */}
                <img src={imgSrc} alt={title}/> {/* cover image, dark gradient manage in css (gradient in the bg of the article) */}
                <h2>{title}</h2> {/* H2 will be displayed over the image, relative/position absolute set in CSS */}
            </article>
        </Link>
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