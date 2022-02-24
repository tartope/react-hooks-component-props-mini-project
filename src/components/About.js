import React from "react";

// below: used destructuring to pass props, passed default link within parameter.

function About({ about, pic = "https://via.placeholder.com/215" }){
    return(
        <aside>
            <img src={ pic } alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}




export default About;