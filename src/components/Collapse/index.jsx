import PropTypes from 'prop-types' // typing the props
import { useState } from 'react'

import arrowRight from '../../images/arrow-right.png'; //backgroun image for the banner

function Collapse({title,infos}) { // destructuration à la déclaration
    const [isOpen, setOpen] = useState(false)

    const toggleCollapse = ()=>{
        setOpen(!isOpen);
    }

    return (
        <article className="collapse-bar">
            <div className='collapse-header'>
            <h3>{title}</h3>
            <img src={arrowRight} alt="arrow" onClick={toggleCollapse} className={isOpen?"arrow-down":""}/>
            </div>

            {isOpen && 
                <div className='collapse-infos'>
                <p>{infos}</p>
                </div>
            }
        </article>
    )
}

Collapse.propTypes = { //set the type of the props
    title: PropTypes.string, 
    infos: PropTypes.string,
}

Collapse.defaultProps= { //set the type of the props
    title: "Title", 
    infos: "Informations", 
}


export default Collapse