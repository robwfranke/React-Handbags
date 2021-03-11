import React from 'react';
import './App.css';




function Article({articleName,image,alternativeText, typeOfBag,price}){

    return (
        <>
<article className="article">



    <span>{articleName}</span>

    <img
        src={image}
        alt={alternativeText}/>


       <p>The {typeOfBag} bag</p>

    <h4>€{price}</h4>

</article>

    </>
    )
}


export default Article;