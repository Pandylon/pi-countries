import React from "react";
import style from "../LandinPage/landingPage.module.css"
import { Link } from "react-router-dom";





export default function LandyngPage() {

  
  return (
    <div className={style.container} >
     
   
     
   <Link className={style.link} to="/home"><p className={style.butt}>Clic me!</p></Link>
    
    </div>
    
  );
}