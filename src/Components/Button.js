import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";



const Button = (props) => {

    
    

    const handleClick = (event) => {
        event.preventDefault();
        
        console.log('posted')
    }


    return (
        <button 
        onClick={props.postButton}
        className="postButton"
        >
        +
        </button>
    )
}

export default Button