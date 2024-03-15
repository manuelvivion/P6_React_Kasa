import PropTypes from 'prop-types' // typing the props
import { useState } from 'react' //use state

import arrowRight from '../../images/arrow-right.png'; //white arrow


function Collapse({ title, infos, page }) { // destructuration à la déclaration : props: title (on the red header), infos (text or list, shown or hidden )
    const [isOpen, setOpen] = useState(false) //boolean to set if collapse component is open or not

    const toggleCollapse = () => { //toggle collapse
        setOpen(!isOpen); //change current state, component is rerender (true becomes false, false becomes true)
    }

    return (
        <article className="collapse-bar"> {/* collapse component rendered as article (header+infos) */}
            <div className={page === "fiche" ? 'collapse-header header-fiche' : 'collapse-header header-about'} onClick={toggleCollapse}> {/* toggle and rerender when click on full red header */}
                <h2>{title}</h2>
                <img src={arrowRight} alt="arrow" className={isOpen ? "arrow-down" : "arrow-up"} /> {/* depending on state, class is switched to set arrow to the correct direction (set in CSS) */}
            </div>

            {/* isOpen && //render only if open state is true
                 */}
            <section className={isOpen ? "collapse-content collapse-content-show" : "collapse-content collapse-content-hide"}>
                <div className={isOpen ? "collapse-infos p-show" : "collapse-infos p-hide"}>
                    <p>{infos}</p>
                </div>
            </section>
        </article>
    )
}

Collapse.propTypes = { //set the type of the props
    title: PropTypes.string,
    infos: PropTypes.string,
}

Collapse.defaultProps = { //set props default
    title: "Title",
    infos: "Informations",
}


export default Collapse