
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import PropTypes from 'prop-types' // typing the props
import { useState } from 'react'

function Rating({rate}) { // destructuration à la déclaration
   const [note] = useState(rate);
   const [list] = useState([1,2,3,4,5])

    return (
        <div>
            {
                list.map((position)=>( //position ; 1 to 5
                     <FontAwesomeIcon 
                     key={position}
                     icon={faStar} 
                     className={
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

Rating.defaultProps= { //set the type of the props
    rate: 0,
}


export default Rating