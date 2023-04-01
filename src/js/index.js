//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./SecondsCounter.jsx";

let counter = 0;
//render your react application
setInterval(() =>{
    const four = Math.floor(counter/1000)
    const three = Math.floor(counter/100)
    const two = Math.floor(counter/10)
    const one = Math.floor(counter/1)
    ReactDOM.render(<SecondsCounter 
        uno={one}
        dos= {two}
        tres= {three}
        cuatro = {four}
         />, document.querySelector("#app")); counter++
}, 1000);

