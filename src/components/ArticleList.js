import React from "react";
import Article from "./Article";

function ArticleList({ articles }){

    const articleElements = articles.map((article) =>{
        return <Article 
        key={ article.id } 
        title={ article.title }
        date={ article.date}
        preview={article.preview}
        minutes={article.minutes}
        />
    })
    // console.log(articleElements)
    return(
        <main>
            { articleElements }
        </main>
        
    )
}



export default ArticleList;


//line 6: use map to iterate through each article and return an Article (child) component (pass props using attribute naming style to Article child component).  place articleElements in return of main.