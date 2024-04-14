
import './App.css';
import Heading from "./components/Header/Header.js";
import Routing from "./Routing.js";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Heading />
          <Routing />
        </BrowserRouter>
       
    </div>
   );
}

export default App;






//  <Sample/>
//import CardBlock from "./components/card/Card-block";
//<CardBlock />

//import Heading from './heading';
//import Sample from './components/sample';



  /* <Heading name="Welcome to React" />
       <Heading name="React is a JavaScript-based UI development library." />
       <Heading  />  
       <Sample />*/
        // <Card />