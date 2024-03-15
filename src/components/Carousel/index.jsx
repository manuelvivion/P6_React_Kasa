import PropTypes from 'prop-types' // typing the props
import { useState } from 'react' //use state hook
import deltaLeft from '../../images/delta-left.png'; //big white arrow

function Carousel({ images }) { // destructuration à la déclaration : array of pictures
    const [imagesList] = useState(images);
    const [cpt, setCpt] = useState(1); //compteur cpt : number of the current picture displayed (1 by default)
    const [cpt2, setCpt2] = useState(1); //compteur cpt : number of the current picture displayed (1 by default)
    const [classImage, setClassImage] = useState("carousel-image carousel-image-slidein"); //compteur cpt : number of the current picture displayed (1 by default)


    function navigateCarousel(forward) { //navigate carousel back n forth with big white arrows

        if (forward) { // forward is boolean : if true, we increment compteur cpt
            setClassImage("carousel-image carousel-image-left");
            // 0.1 second delay
            setTimeout(function () {
                setClassImage("carousel-image carousel-image-slidein ");
            }, 100);
            setCpt2(cpt);
            cpt >= imagesList.length ? setCpt(1) : setCpt(cpt + 1); //if current picture is last picture, next picture will be number 1
        }
        else { //forward is false : go backward, decrement cpt
            setClassImage("carousel-image carousel-image-right");
            // 0.1 second delay
            setTimeout(function () {
                setClassImage("carousel-image carousel-image-slidein ");
            }, 100);
            setCpt2(cpt);
            cpt <= 1 ? setCpt(imagesList.length) : setCpt(cpt - 1); //if first picture, previous becomes last of the list
        }

    }

    return (
        <div className='carousel-main'>
            <img src={imagesList[cpt - 1]} alt="" className={classImage} />
            {/* if more than 1 picture in the list, we render navigation arrows and compteur */}
            {imagesList.length > 1 ?/* react.fragment instead of parent div */(
                <>
                    <p className='carousel-cpt'>{(cpt)}/{imagesList.length}</p>
                    <img src={deltaLeft} alt="previous" className="previous-img" onClick={() => navigateCarousel(false)} />
                    <img src={deltaLeft} alt="next" className="next-img" onClick={() => navigateCarousel(true)} />
                    <img src={imagesList[cpt2 - 1]} alt="" className="carousel-image-bg" />
                </>
            ) :
                (null/* if only 1 pictures : no arrows, no compteur => no render */)}

        </div>
    )

}

Carousel.propTypes = { //set the type of the props
    images: PropTypes.array,
}

Carousel.defaultProps = {  //default props
    images: [], //empty array
}


export default Carousel