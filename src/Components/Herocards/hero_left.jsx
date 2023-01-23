import React from "react";

function Hero_Left(props) {
    return(
        <div className="herocontainer">               
            <div className="hero-content">
                <h2>{props.title}</h2>
                <p>{props.text}</p>

                <button style={{display: props.button}} href={props.buttonlink}>{props.buttoncontent}</button>
            </div>
            <img src={props.img} className="hero-img"/>
        </div>
    )
};

export default Hero_Left;