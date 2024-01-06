
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //import awesome icons (stars)
import { faStar } from '@fortawesome/free-solid-svg-icons' // import star icon from fontawsome dependencie

import PropTypes from 'prop-types' // typing the props
import { useState } from 'react' // use state

function Rating({rate}) { // destructuration à la déclaration : prop = rate of the house
   const [note] = useState(rate);
   const [list] = useState([1,2,3,4,5]) //list of 5 stars // ATTN : item = index+1

    return (
        <div>
            {
                list.map((position)=>( //position = item ; 1 to 5 
                     <FontAwesomeIcon  //we display 5 stars
                     key={position}
                     icon={faStar} 
                     className={ // we had star-red class only if position <=rate
                        (position)<=note?"rate-star star-red":"rate-star"
                     }
                     />
                ))
            }
           
        </div>
    )
    
}

Rating.propTypes = { //set the type of the props
    rate: PropTypes.number, 
}

Rating.defaultProps= { //default
    rate: 0,
}


export default Rating