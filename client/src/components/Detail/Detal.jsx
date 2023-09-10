import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux"
import {getCountry} from "../../Redux/actions/actions"
import style from "./detail.module.css"


import axios from "axios";
import Activity from "../Activities/ActivityCard/Activity";


//"/detail/:id" --> 55

export default function Detail() {
  const { id } = useParams(); 
  const country = useSelector(state => state.country)

  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(getCountry(id));
   
   
  
    // desmontaje
    return () => {
      // ejecutar cuando se desmonte
      console.log("Me desmonto, adios!");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className={style.conteiner}>
        <div className={style.detail}>

            <h2>{country.code}</h2>
            <p >{country.name}</p>
       

        <div key={country.id} >
            <div className={style.info} >
            <img  src={country.flag}/>

            <p className={style.caiptal}>Capital: {country.capital}</p>
            <p >Continent: {country.continent}</p>
            <p >Subregion: {country.subregion}</p>
            <p >Area: {country.area}</p>
            <p >Population: {country.population}</p>
           
         
            
            </div>
            </div>
           
           
        </div>
        <div className={style.cardContainer}>
            {
                country.Activities?.map((act) => {
                    return(
                        <Activity 
                        key={act.id}
                        name={act.name}
                        difficulty={act.difficulty}
                        duration={act.duration}
                        season={act.season}
                        />
                        )
                })
            }
          </div>
        
    </div>
  );
}
