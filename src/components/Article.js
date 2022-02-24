import React from "react";

function Article({title, date = "January 1, 1970", preview, minutes}){
    // const {title, date = "January 1, 1970", preview, minutes } = article
    // console.log(article)
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}



export default Article;

//pass props(destructured) as parameter and add each to elements in return.