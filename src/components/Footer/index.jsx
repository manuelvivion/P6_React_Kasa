import logoKasa from '../../images/logo-kasa-white.png'; //import Kasa logo

function Footer() {
    return (
        <footer>
            <img src={logoKasa} alt="logo Kasa"/>
            <p>&#169; 2023 Kasa. All rights reserved</p> {/* &#169; is copyright icon */}
        </footer>
    )
}

export default Footer