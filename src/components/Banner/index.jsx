import PropTypes from 'prop-types' // typing the props

function Banner({ imgSrc, bannerText, darken }) { // destructuration à la déclaration

    return (
        <div className={darken ? "banner banner-dark" : "banner"}> {/* className added to manage CSS in banner.Scss file */}
            <img src={imgSrc} alt={bannerText === "" ? "Paysage de montagne" : bannerText} /> {/* if no text sent in props, "alt"="paysage..." */}
            <h1>{bannerText}</h1> {/* H1 will be displayed over the image, relative/position absolute set in CSS */}
        </div>
    )
}

Banner.propTypes = { //set the type of the props
    bannerText: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
}

Banner.defaultProps = { //set the  props default
    bannerText: "",
}


export default Banner