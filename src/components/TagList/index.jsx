import PropTypes from 'prop-types' // typing the props
import { useState } from 'react'

function TagList({tags}) { // destructuration à la déclaration
   const [tagList] = useState(tags);

    return (
        <div>
            {
                tagList.map((tag,index)=>(
                    <span key={index}>{tag}</span>
                ))
            }
        </div>
    )
    
}

TagList.propTypes = { //set the type of the props
    tags: PropTypes.array, 
}

TagList.defaultProps= { //set the type of the props
    tags: [],
}


export default TagList