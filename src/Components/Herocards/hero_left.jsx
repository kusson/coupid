import React from "react";

function Hero_Left(props) {
    return(
        <div className="herocard">

            <div className="hero-content">
                <h3>{props.summary}</h3>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
                <a href={props.buttonlink}>
                <button style={{display: props.button}}>{props.buttoncontent}</button>
                </a>
            </div>
            
            <img src={props.img} alt={props.alt} className="hero-img"/>

        </div>
    )
};

export default Hero_Left;