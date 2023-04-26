import React from "react";

function Footer() {
    let year = new Date().getFullYear();
    return(
        
        <footer>
            <img alt="coupid" src="../Images/Logo.png" />
            <img alt="applogo" src="../Images/AppLogo.png" className="hiddenAppLogo"/>
            <p>Copyright ⓒ {year}</p>
        </footer>
        
    )
};

export default Footer;