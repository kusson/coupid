import React from "react";
import HeroL from "../Herocards/hero_left";
import HeroR from "../Herocards/hero_right";
import home_Content from "../Herocontents/home_content";
import singleHeroContent from "../Herocontents/singleherocontent";

function Home() {


    function createHeroR(partnership_Content) {
        return (
            <HeroR 
                key = {partnership_Content.id}
                title = {partnership_Content.title}
                text = {partnership_Content.text}
                img = {partnership_Content.img}
                button = {partnership_Content.button}
                buttoncontent = {partnership_Content.buttoncontent}
            />
        )
    }

    return (
        <div className="homePageContainer">
            <div className="homeTopHero">
                <HeroL
                    key = {singleHeroContent[0].id}
                    title = {singleHeroContent[0].title}
                    text = {singleHeroContent[0].text}
                    img = {singleHeroContent[0].img}
                    button = {singleHeroContent[0].button}
                    buttoncontent = {singleHeroContent[0].buttoncontent}
                    buttonlink = {singleHeroContent[0].buttoncontent}
                />
            </div>

            <h1 style={{padding: "5rem"}}>How to send gifts with Coupid</h1>
            
            <div>
                {home_Content.map(createHeroR)}
            </div>

            <div className="homeBottomHero" style={{backgroundColor: "#F7BF4F" }}>
                <HeroL 
                    key = {singleHeroContent[1].id}
                    title = {singleHeroContent[1].title}
                    text = {singleHeroContent[1].text}
                    img = {singleHeroContent[1].img}
                    button = {singleHeroContent[1].button}
                    buttoncontent = {singleHeroContent[1].buttoncontent}
                    buttonlink = {singleHeroContent[1].buttoncontent}
                />
            </div>
        </div>
    )
};

export default Home;