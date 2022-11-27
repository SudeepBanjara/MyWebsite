import React from "react";
// This will Pass the HardCoded Value
/*
const Button =() =>{
   return <button className="button"> Google </button>
}
*/
const Button =({name, link}) =>{
    return <a href={link} target="_blank"><button className="button"> {name} </button></a>
 }

 // this will export the button which can be called in another component.
export default Button;
