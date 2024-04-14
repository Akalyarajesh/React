import React from 'react';
import {Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import Mobile from "./pages/Mobile";
import Laptop from "./pages/Laptop";
import Accessories from "./pages/Accessories";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
const Routing = () =>{
    return(
       
        <Routes>
        <Route path = "/Home" Component={Home} ></Route>
        <Route path = "/Mobile" Component={Mobile} ></Route>
        <Route path = "/Laptop" Component={Laptop}></Route>
        <Route path =  "/Accessories" Component={Accessories}></Route>
        <Route path = "/Contact" Component={Contact}></Route>
        <Route path = "/Login" Component={Login}></Route>
     </Routes> 
    )
}
export default Routing;


