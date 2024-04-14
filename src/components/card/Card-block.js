import React from "react";
import {electroData} from "../../Data.js";
import Card from "./card.js";
function CardBlock(){
    console.log(electroData);
return(

<>
  <div className="wrapper">
    {electroData.map((data) => (
        <Card data ={data} key = {data.name}/>
    ))}
  </div>
</>

);
}
export default CardBlock;