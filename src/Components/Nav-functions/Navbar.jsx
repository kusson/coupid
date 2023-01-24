import React from "react";
import logo from "../../Images/Logo.svg";



function Navbar() {


    function burgerToggle() {
        let x = document.getElementById("navlist");
        if (x.className === "nav-list") {
            x.className += " responsive";
        } else {
            x.className = "nav-list"
        }
    }

    return(
        
        <nav className="navbar">
       
            <div className="coupidLogo" alt="coupidlogo">
                <a href="/index">
                    <img src={logo}/>
                </a>
            </div>

            <ul className="nav-list" id="navlist">
                <li>
                    <a href="/browsegifts">Browse Gifts</a>
                </li>
                <li>
                    <a href="/partnership">Partnership</a>
                </li>
                <li>
                    <a href="/aboutus">About Us</a>
                </li>
                <li>
                    <a href="/signin">Sign In</a>
                </li>
            </ul>

            <div className="burgerMenu" id="burgermenu" onClick={burgerToggle} >
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

        </nav>
    )
};

export default Navbar;