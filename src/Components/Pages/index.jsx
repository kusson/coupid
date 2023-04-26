import React from "react";
import HeroL from "../Herocards/hero_left";
import HeroR from "../Herocards/hero_right";
import home_Content from "../Herocontents/home_content";


function Home() {


    return (
        <div className="homePageContainer">
            <div className="homeTopHero">
                <HeroL
                    key = {home_Content[0].id}
                    title = {home_Content[0].title}
                    text = {home_Content[0].text}
                    text2 = {home_Content[0].text2}
                    img = {home_Content[0].img}
                    button = {home_Content[0].button}
                    buttoncontent = {home_Content[0].buttoncontent}
                    buttonlink = {home_Content[0].buttonlink}
                />
            </div>

            <div className="promoVid" id="promoVid">
                <iframe src="https://www.youtube-nocookie.com/embed/AkTZB50UuV8" title="Coupid Promo Vid" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
            </div>
            
            <h1 className="subTitle">Send Your Gift in Just 60 Seconds with 3 Easy Steps!</h1>

            <div>
            
            <div className = "leftCircle">
                <HeroL 
                    
                    key = {home_Content[1].id}
                    summary = {home_Content[1].summary}
                    title = {home_Content[1].title}
                    text = {home_Content[1].text}
                    text2 = {home_Content[1].text2}
                    img = {home_Content[1].img}
                    button = {home_Content[1].button}
                    buttoncontent = {home_Content[1].buttoncontent}
                    buttonlink = {home_Content[1].buttonlink}
                />
            </div>
            
            <div className = "rightCircle">
                <HeroR
                    key = {home_Content[2].id}
                    summary = {home_Content[2].summary}
                    title = {home_Content[2].title}
                    text = {home_Content[2].text}
                    text2 = {home_Content[2].text2}
                    text3 = {home_Content[2].text3}
                    img = {home_Content[2].img}
                    button = {home_Content[2].button}
                    buttoncontent = {home_Content[2].buttoncontent}
                />
            </div>

            <div className="leftCircle">
                <HeroL 
                    key = {home_Content[3].id}
                    summary = {home_Content[3].summary}
                    title = {home_Content[3].title}
                    text = {home_Content[3].text}
                    text2 = {home_Content[3].text2}
                    img = {home_Content[3].img}
                    button = {home_Content[1].button}
                    buttoncontent = {home_Content[3].buttoncontent}
                    buttonlink = {home_Content[3].buttonlink}
                />
            </div>

            <div className="subTitle">
                <h1>What are 'Delivered Gift' and 'In-store' Gift?</h1>   
            </div>

            <HeroL
                key = {home_Content[4].id}
                summary = {home_Content[4].summary}
                title = {home_Content[4].title}
                text = {home_Content[4].text}
                text2 = {home_Content[4].text2}
                text3 = {home_Content[4].text3}
                img = {home_Content[4].img}
                button = {home_Content[4].button}
                buttoncontent = {home_Content[4].buttoncontent}
            />

            <HeroR
                key = {home_Content[5].id}
                summary = {home_Content[5].summary}
                title = {home_Content[5].title}
                text = {home_Content[5].text}
                text2 = {home_Content[5].text2}
                text3 = {home_Content[5].text3}
                img = {home_Content[5].img}
                button = {home_Content[5].button}
                buttoncontent = {home_Content[5].buttoncontent}
            />
            </div>

            
            

            <div className="homeBottomHero" style={{backgroundColor: "#F7BF4F" }}>
                <HeroL
                    key = {home_Content[6].id}
                    title = {home_Content[6].title}
                    text = <div>• Partner with Coupid to create a new sales chennel and reach new customers.</div>
                    text2 = <div>• Grow online. Present your products as an eGift and grow your business.</div>
                    img = {home_Content[6].img}
                    alt = {home_Content[6].alt}
                    button = {home_Content[6].button}
                    buttoncontent = {home_Content[6].buttoncontent}
                    buttonlink = {home_Content[6].buttonlink}
                />
            </div>
        </div>
    )
};

export default Home;