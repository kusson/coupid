import React from "react";
import partnership_Content from "../Herocontents/partnership_content";
import HeroL from "../Herocards/hero_left";

function Partnership() {
    function openURL() {
        const url = "https://forms.gle/1gfxJkbVBrpGVCs56";
        window.open(url, "_blank")
    }

    function createHeroL(partnership_Content) {
        return (
            <HeroL 
                key = {partnership_Content.id}
                title = {partnership_Content.title}
                text = {partnership_Content.text}
                img = {partnership_Content.img}
                button = {partnership_Content.button}
                buttoncontent = {partnership_Content.buttoncontent}
                buttonlink = {partnership_Content.buttonlink}
            />
        )
    }

    return (
        <div className="content-container" id="partnership">
            <div className="partnerTitle">
                <h2>
                    Turn potential customers into your new customers.
                </h2>
                <p>
                    Your customers no longer have to worry about the reciever's preferences and whether anyone will be present to open the door.
                    The receiver gets to choose all those.
                </p>
                <div className="eoiForm">
                    <h2>2% commission for the first 100 orders</h2>
                    <p>Partner with COUPID today to wrap your products into gifts and grow online.</p>
                        <form className="eoiField">
                            <input id="input" type="text" className="businessName"  placeHolder="Business Name"></input>
                            <input id="input" type="email" className="email" placeHolder="Email Address"></input>
                            <input id="input" type="text" className="phone" placeHolder="Phone Number"></input>
                        </form>          
                        <div className="buttonDiv">
                            <button onClick={openURL}>Get Started</button>
                        </div>
                    <p>Already with Coupid? &nbsp; <a href="#">Log In</a></p>

                </div>
            </div>

            <div className="partnerContent">
                <h1 id="howitworks">
                    How Coupid works
                </h1>
                {partnership_Content.map(createHeroL)}
            </div>
        </div>    
    )
};

export default Partnership;