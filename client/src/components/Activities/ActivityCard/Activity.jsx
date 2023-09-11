import React from "react";

import style from "./activity.module.css"




export default function Activity({name,difficulty,duration,season,countries}) {





  return (
    <div className={style.cardContainer}>
    <div className={style.cardactivity}>
      <p className={style.cardsp}>Activity</p>
      <h2 className={style.cardInfo}>{name}</h2>
    </div>
    <div className={style.cardStats}>
      <div className={style.stats}>
      <div className={style.type}>Difficulty</div>
        <div className={style.value}>{difficulty}</div>  
      </div>

      <div className={style.statsBorder}>
      <div className={style.type}>Season</div>
        <div className={style.value}>{season}</div>
        
      </div>
      <div className={style.stats}>
      <div className={style.type}>Duration</div>
      <div className={style.value}>{duration}</div>
        
      </div>
      
    </div>
    <div className={style.cardsCountries}> 
         
     
          {countries?.map((country) => (
            
              <p key={country.id}>{country.name}</p>
             
              
              
            
          ))}
        
      </div>
    
    
    
    
    

 
      
     
    </div>
    
  );
}