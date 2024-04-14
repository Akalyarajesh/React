import React,{useState} from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

 function Heading() {
  const [show,setShow] = useState(false);
  const showHandler =()=>{
      setShow(!show);
  }
   return(
   <>
 <section className="section0">
        <div className='header1'>
          <div className="head">
           <h1>ElectroHub</h1>
          </div>
          <div className="container">
             <form >
               <input type="text" placeholder="Search Product" />
               <button type="submit">Search</button> 
             </form>
          </div>
          <div className="log">
              <p> <Link to = "/Login">Login</Link> | <Link to = "/Register">Register</Link>
                   <Link to ="/Yourcart"> <FontAwesomeIcon icon={faCartShopping}/>  Your Cart</Link></p>
          </div>
        </div>
    </section>

    <section className="section1">
          <div className="head1">
      <ul>
        <li onClick={() => showHandler()}><Link to = "/Home">Home</Link></li>
        <li> <Link to ="/Mobile">Mobiles</Link></li>
        <li><Link to ="/Laptop">Laptops</Link></li>
        <li><Link to = "/Accessories">Accessories</Link> </li>
        <li><Link to ="/Contact">Contact Us</Link></li>
    </ul>
    
</div>
</section>
{
     
     show && <div className="sample"> <h1>Rajesh</h1>

       <h2>Akalya</h2>
       <p>
       What is m-commerce? M-commerce (mobile commerce) is the buying and selling of goods
        and services through  wireless handheld devices such as smartphones and tablets.
        M-commerce is a form of e-commerce that enables users to access online shopping platforms
         without the use of a desktop computer.
       </p>
     </div>

     
     }
        </>
    )
 }
 export default Heading;
