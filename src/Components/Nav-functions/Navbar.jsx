import React from "react";
import logo from "../../Images/Logo.svg";



function Navbar() {


    function burgerToggle() {
        let x = document.getElementById("navlist");
        let l1 = document.getElementById("l1");
        let l2 = document.getElementById("l2");
        let l3 = document.getElementById("l3");

        if (x.className === "nav-list") {
            x.className += " responsive";
            l1.className += " cross";
            l2.className += " cross";
            l3.className += " cross";
        } else {
            x.className = "nav-list"
            l1.className = "line1";
            l2.className = "line2";
            l3.className = "line3";
        }
    }

    return(
        
        <nav className="navbar">
       
            <div className="coupidLogo" alt="coupidlogo">
                <a href="/">
                    <img alt="home" src={logo}/>
                </a>
            </div>

            <ul className="nav-list" id="navlist">
                {/* <li>
                    <a href="/browsegifts">Browse Gifts</a>
                </li> */}
                <li>
                    <a href="/">Home</a>
                </li>

                <li>
                    <a href="/aboutus">About Us</a>
                </li>

                <li>
                    <a href="/partnership">Partnership</a>
                </li>
                
                {/* <li>
                    <a href="/signin">Sign In</a>
                </li> */}
            </ul>

            <div className="burgerMenu" id="burgermenu" onClick={burgerToggle} >
                <div className="line1" id="l1"></div>
                <div className="line2" id="l2"></div>
                <div className="line3" id="l3"></div>
            </div>

        </nav>
    )
};

export default Navbar;