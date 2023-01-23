import React from "react";
import HeroL from "../Herocards/hero_left";
import l_contents from "../Herocontents/aboutus_Lcontent";



function Aboutus() {

    function createHeroL(l_contents) {
        return (
            <HeroL 
                key = {l_contents.id}
                title = {l_contents.title}
                text = {l_contents.text}
                img = {l_contents.img}
                button = {l_contents.button}
                buttoncontent = {l_contents.buttoncontent}
                buttonlink = {l_contents.buttonlink}
            />
        )
    }

    return (
        <div className="aboutUsContainer">
            <div className="aboutUsTitle">
                <h2>
                    About Coupid
                </h2>
                <p>
                    Coupid is an online gifting platform that makes sending digital gifts just like messaging.<br/>
                    We started in 2022 with the belief that sending gifts should be easy, pleasant and happy.<br />
                    We believe it helps people express that their love and care to their families, friends and colleagues.
                </p>
            </div>

            <div className="aboutUsHero">
                {l_contents.map(createHeroL)}
            </div>
        </div>
    )
};

export default Aboutus;