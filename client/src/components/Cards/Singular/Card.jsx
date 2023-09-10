import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Card.module.css";
import { Link } from "react-router-dom";


export default function Card({id,name,flag, continent,
                              subregion,area, population,
                              Activities,code})
                {
  
  return (
    <div className={style.cardContainer}>
    
       <h2 className={style.cardInfo}>{name}</h2>

       <Link to={`/countries/${id}`}>
        <img className={style.cardImage} src={flag} alt={name} />
       </Link>
       <h2 className={style.cardInfo}> {continent}</h2>
     
      
        
     
    </div>
  );
}
