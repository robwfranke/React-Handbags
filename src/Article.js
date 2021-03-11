import React from 'react';
import './App.css';




function Article({articleName,image,alternativeText}){

    return (
        <>
<article className="article">



    <span>{articleName}</span>

    <img
        src={image}
        alt={alternativeText}/>

</article>

    </>
    )
}


export default Article;