import React from "react";

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
                        GIFT SENDER
                    </li>
                    <li>
                        MERCHANTS
                        <p>Terms and Condition</p>
                        <p>Tutorial</p>
                    </li>
                    <li>
                        QUICK LINKS
                    </li>
                    <li>
                        COMPANY
                        <p>Careers</p>
                        <p>About Us</p>
                        <p>Legal and Privacy</p>
                    </li>
                    <li>
                        FOLLOW US
                    </li>
                    <li>
                        GIFT RECIEVER
                    </li>
                    <li>
                        ENTERPRISE
                    </li>
                </ul>
              
            </div>

        </div>
    )
}

export default BottomLinks;