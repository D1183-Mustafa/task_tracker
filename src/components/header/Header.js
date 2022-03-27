import React, { useState } from "react";
import AddTask from "../addtask/AddTask";
import Buttons from "./Buttons";
import "./Header.css";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const handleBtn = (e) =>{
      if(isVisible === false) {
        setIsVisible(!isVisible)
        document.getElementById("btn").innerText = "Close Add Task Bar"
      }else {
        setIsVisible(!isVisible)
        document.getElementById("btn").innerText = "Show Add Task Bar"
    }
    
    console.log(isVisible);
  }
  return (
    <div className="container">
      <Buttons handleBtn= {handleBtn}/>
      {isVisible && <AddTask />}
      
    </div>
  );
}

export default Header;
