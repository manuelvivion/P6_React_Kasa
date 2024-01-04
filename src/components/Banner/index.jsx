import PropTypes from 'prop-types' // typing the props

function Banner({imgSrc,bannerText}) { // destructuration à la déclaration
 
    return (
        <div className="banner">
            <img src={imgSrc} alt="bannière"/>
            <h2>{bannerText}</h2>
        </div>
    )
}

Banner.propTypes = { //set the type of the props
    bannerText: PropTypes.string, 
    imgSrc: PropTypes.string.isRequired,
}

Banner.defaultProps= { //set the type of the props
    bannerText: "", 
}


export default Banner