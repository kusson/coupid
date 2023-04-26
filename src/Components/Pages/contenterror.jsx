import React from "react";
import Error404 from "../../Images/404.jpg";

function ContentError() {
    return(
        <div className="contenterror">
                <img alt="error404" src={Error404} />
                <h1>Site Under Construction</h1>
                <p>We are working hard to bring the Coupid App experience to our website. <br />
                Please use our App to browse and purchase gifts in the meantime. <br />
                We appreciate your patience. </p>
            </div>
    )
};

export default ContentError;