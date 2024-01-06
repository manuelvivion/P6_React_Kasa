import PropTypes from 'prop-types' // typing the props
import { useState } from 'react'

function TagList({tags}) { // destructuration à la déclaration : prop tags = array of words
   const [tagList] = useState(tags);

    return (
        <div>
            {
                tagList.map((tag,index)=>( //render each tag of the list in a differrent <span> (displayed in a row)
                    <span key={index}>{tag}</span>
                ))
            }
        </div>
    )
    
}

TagList.propTypes = { //set the type of the props
    tags: PropTypes.array, 
}

TagList.defaultProps= { //default prop is empty arry
    tags: [],
}


export default TagList