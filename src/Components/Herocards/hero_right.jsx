import React from "react";

function Hero_Right(props) {
    return(
        <div className="herocard">
            <div className="herocontainer">
                <img src={props.img} className="hero-img"/>               
                <div className="hero-content">
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>

                    <button style={{display: props.button}} href={props.buttonlink}>{props.buttoncontent}</button>
                </div>  
            </div>
        </div>
    )

}

export default Hero_Right;