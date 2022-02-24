import React from "react";
import Article from "./Article";

function ArticleList(props){

    const articleElements = props.articles.map((article) =>{
        return <p key={ article.id }>{ article }</p>
    })

    return(
        <main>
            <Article />
            { articleElements }
        </main>
        
    )
}



export default ArticleList;


// an array of Article components (one component for each post passed down as a prop to ArticleList)
// make sure to assign a unique key prop to each Article