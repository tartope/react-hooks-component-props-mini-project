import React from "react";

function About({ about, pic = "https://via.placeholder.com/215" }){
    return(
        <aside>
            <img src={ pic } alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}




export default About;