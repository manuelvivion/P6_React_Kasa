import PropTypes from 'prop-types' // typing the props
import { useState } from 'react'
import deltaLeft from '../../images/delta-left.png'; //backgroun image for the banner

function Carousel({images}) { // destructuration à la déclaration
   const [imagesList] = useState(images);
   const [cpt, setCpt] = useState(1);
   
function navigateCarousel(forward){
   
    if (forward){
        cpt>=imagesList.length?setCpt(1):setCpt(cpt+1);
    }
    else{
        cpt<=1?setCpt(imagesList.length):setCpt(cpt-1);
    }
    
} 

    return (
        <div className='carousel-main'>
            <img src={imagesList[cpt-1]} alt="" className='carousel-image'/>
                {imagesList.length>1?(
                    <> {/* react.fragment instead of parent div */}
                    <p className='carousel-cpt'>{(cpt)}/{imagesList.length}</p>
                    <img src={deltaLeft} alt="previous" className="previous-img" onClick={()=>navigateCarousel(false)}/>
                    <img src={deltaLeft} alt="next" className="next-img" onClick={()=>navigateCarousel(true)} />
                    </>
                    ):(null)}
            
        </div>
    )
    
}

Carousel.propTypes = { //set the type of the props
    images: PropTypes.array, 
}

Carousel.defaultProps= { 
    images: [],
}


export default Carousel