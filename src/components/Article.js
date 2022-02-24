import React from "react";

function Article({article}){
    const {title, date, preview, minutes } = article
    console.log(title)
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}



export default Article;