import React from "react";
import ig from "../../Images/Instagram_Glyph_Gradient copy.png";
import linkedIn from "../../Images/LI-In-Bug.png";
import fb from "../../Images/f_logo_RGB-Blue_1024.png";

function BottomLinks() {

    return(
        <div className="bottom-navbox">
        
            <div className="contact-details">
                <h2>Contact Us</h2>
                <p>Monday - Sunday      8am - 6pm</p>
                <p>0452 612 828</p>
                <p>hello@coupid.com.au</p>
            </div>
            
            <div className="bottom-links">
                <ul className="linktable">
                    
                    <li>
                        MERCHANTS
                        <a href="/tandc">Terms and Conditions</a>
                        {/* <a href="/tutorial">Tutorial</a> */}
                    </li>
                    {/* <li>
                        QUICK LINKS
                    </li> */}
                    <li>
                        COMPANY
                        {/* <a href="/careers">Careers</a> */}
                        <a href="/aboutus">About Us</a>
                        <a href="/legalandprivacy">Legal and Privacy</a>
                    </li>

                    <li className="socials">
                        SOCIAL MEDIA
                        <div className="iconContainer">
                            <a href="https://www.instagram.com/coupid.au/" target="_blank" rel="noreferrer">
                                <img className="socialicon" alt="instagram icon" src={ig}/>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100091709176687" target="_blank" rel="noreferrer">
                                <img className="socialicon" alt="facebook icon" src={fb}/>
                            </a>
                            <a href="https://www.linkedin.com/company/coupid/about/" target="_blank" rel="noreferrer">
                                <img className="socialicon" alt="linkedin icon" src={linkedIn}/>
                            </a>
                        </div>
                        
                    </li>
                    {/* <li>
                        FOLLOW US
                    </li> */}
                    {/* <li>
                        GIFT RECEIVER
                    </li>

                    <li>
                        GIFT SENDER
                    </li> */}
                    {/* <li>
                        ENTERPRISE
                    </li> */}
                </ul>
              
            </div>

        </div>
    )
}

export default BottomLinks;