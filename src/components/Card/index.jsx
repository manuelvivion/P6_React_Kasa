import PropTypes from 'prop-types' // typing the props
import { Link } from 'react-router-dom';
//import { useState } from 'react'

function Card({imgSrc,title,id}) { // destructuration à la déclaration

 

    return (
        <Link to={`/fiche/${id}`}>
            <article className="card-house">
                <img src={imgSrc} alt={title}/>
                <h3>{title}</h3>
            </article>
        </Link>
    )
}

Card.propTypes = { //set the type of the props
    imgSrc: PropTypes.string,
    title: PropTypes.string, 
    id: PropTypes.string.isRequired,
}

Card.defaultProps= { //set the type of the props
    title: "Logement vacance", 
    id: "1", 
}


export default Card