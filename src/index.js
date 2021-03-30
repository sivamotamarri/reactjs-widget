import React from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg'
let HelloWorld = () => {  
    return <>
    <h1>Hello there World!</h1>
    <img src={logo} alt=""/>
    </>
}
ReactDOM.render(  <HelloWorld/>,  document.getElementById("root"));