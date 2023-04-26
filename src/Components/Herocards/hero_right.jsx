import React from "react";

function Hero_Right(props) {
    return(
        <div className="herocard" id="heroR">

                <img alt={props.alt} src={props.img} className="hero-img"/>   

                <div className="hero-content">
                    <h3>{props.summary}</h3>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                    <p>{props.text2}</p>
                    <p>{props.text3}</p>
                    <button style={{display: props.button}} href={props.buttonlink}>{props.buttoncontent}</button>
                </div>  
        </div>
    )

}

export default Hero_Right;