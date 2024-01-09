import PropTypes from 'prop-types' // typing the props

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //import awesome icons (stars)
import { faHeart } from '@fortawesome/free-solid-svg-icons' // import star icon from fontawsome dependencie
import { faHeart as faHeartOut } from '@fortawesome/free-regular-svg-icons' // import star icon from fontawsome dependencie



function Favorite({like}) { // destructuration à la déclaration : props: title (on the red header), infos (text or list, shown or hidden )
   
   /*  const toggleCollapse = ()=>{ //toggle collapse
        setOpen(!isOpen); //change current state, component is rerender (true becomes false, false becomes true)
    } */

    
    return (
        <FontAwesomeIcon  //we display 5 stars
        icon={like?faHeart:faHeartOut} 
        className="like-icon"
        />
    )
}

Favorite.propTypes = { //set the type of the props
    liked: PropTypes.bool, 
}

Favorite.defaultProps= { //set props default
    liked: false,
}


export default Favorite