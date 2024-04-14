import React from "react";
import "./card.css";

function Card (props){
    console.log(props);
    const clickHandler = () =>{
        console.log("Electronics");
    };
    return(
        <>
       <div className="card-container">
        <div className="card">
             <img src ={props.data.source} className="card-image" alt={props.name}/>
             <div className="card-content">
            <a href="./"> <p className="product-name">{props.data.name}</p></a>
                <p className="product-rate">{props.data.star1}<span>{props.data.star2}</span>
                <span>{props.data.star3}</span>
                <span>{props.data.star4}</span>
                <span>{props.data.star5}</span></p>
                <p>{props.data.price}</p>
             </div>
             <div className="btn">
                <button type="button" onClick={clickHandler()}>ADD TO CART</button>
             </div>
         </div> 
       </div>
       </>
    );
}

export default Card;

/*<p className="product-rating">{props.data.name}</p>
                <p>{props.data.star1}<span>{props.data.star2}</span>
                <span>{props.data.star3}</span>
                <span>{props.data.star4}</span>
                <span>{props.data.star5}</span></p> */
               
               
                /**/