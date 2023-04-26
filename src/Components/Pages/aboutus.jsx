import React from "react";
import HeroL from "../Herocards/hero_left";
import HeroR from "../Herocards/hero_right";
import l_contents from "../Herocontents/aboutus_Lcontent";
import networkImg from "../../Images/about_img1.svg";



function Aboutus() {

    return (
        <div className="aboutUsContainer">
        
            <div className="aboutUsBanner">
                <img className="networkImg" alt="aboutuslogo" src={networkImg} />
                <div className="aboutUsContent">    
                    <h1>
                        About Coupid
                    </h1>
                    <p>At Coupid, we believe that sending gifts should be easy, pleasant, and simple. Our eGift platform, launched in 2022, makes gifting as easy as sending messages. Our mission is to help people express that they care to their families, friends, and colleagues.</p>
                </div>
                
            </div>

            <div className="aboutUsHero">
                <HeroL 
                    key = {l_contents[0].id}
                    title = {l_contents[0].title}
                    text = {l_contents[0].text}
                    text2 = {l_contents[0].text2}
                    img = {l_contents[0].img}
                    button = {l_contents[0].button}
                    buttoncontent = {l_contents[0].buttoncontent}
                    buttonlink = {l_contents[0].buttonlink}
                />

                <HeroR 
                    key = {l_contents[1].id}
                    title = {l_contents[1].title}
                    text = {l_contents[1].text}
                    text2 = {l_contents[1].text2}
                    img = {l_contents[1].img}
                    button = {l_contents[0].button}
                    buttoncontent = {l_contents[1].buttoncontent}
                    buttonlink = {l_contents[1].buttonlink}
                />

                <HeroL 
                    key = {l_contents[2].id}
                    title = {l_contents[2].title}
                    text = {l_contents[2].text}
                    text2 = {l_contents[2].text2}
                    img = {l_contents[2].img}
                    button = {l_contents[0].button}
                    buttoncontent = {l_contents[2].buttoncontent}
                    buttonlink = {l_contents[2].buttonlink}
                />
            </div>
        </div>
    )
};

export default Aboutus;