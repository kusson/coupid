import React from "react";
import partnership_Content from "../Herocontents/partnership_content";
import HeroL from "../Herocards/hero_left";
import EoiForm from "../Pages/eoiform.jsx";
import singleHeroContent from "../Herocontents/singleherocontent";

function Partnership() {
    

    function createHeroL(partnership_Content) {
        return (
            <HeroL 
                key = {partnership_Content.id}
                title = {partnership_Content.title}
                text = {partnership_Content.text}
                text2 = {partnership_Content.text2}
                text3 = {partnership_Content.text3}
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
                <h1>
                    Convert hesitant gift-givers into new customers with Coupid
                </h1>
                
                <div className="eoiForm">
                    <h2>2% commissions for the first 100 orders</h2>
                    <p>Partner with COUPID today to wrap your products into eGift Coupons and grow online.</p>
                        <EoiForm />
                    <p>Already with Coupid? &nbsp; <a href="/signin">Log In</a></p>

                </div>
            </div>

            <div className="partnerContent">
                <HeroL className="whyeGifts" 
                    key = {singleHeroContent[1].id}
                    title = {singleHeroContent[1].title}
                    text = {singleHeroContent[1].text}
                    text2 = {singleHeroContent[1].text2}
                    text3 = {singleHeroContent[1].text3}
                    img = {singleHeroContent[1].img}
                    button = {singleHeroContent[1].button}
                    buttoncontent = {singleHeroContent[1].buttoncontent}
                    buttonlink = {singleHeroContent[1].buttonlink}
                />
                <h1 id="howitworks">
                    How Coupid works
                </h1>
                {partnership_Content.map(createHeroL)}
            </div>
        </div>    
    )
};

export default Partnership;