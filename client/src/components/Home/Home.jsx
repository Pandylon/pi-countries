import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/Cards"
//import Paginated from "../Paginated/Paginated";
import style from "./home.module.css"
import {getCountries,orderCards,filterByContinent,filterBypopulation} from "../../Redux/actions/actions"
import Filters from "../NavBar/Filters/Filters";




export default function Home() {

  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries)



  useEffect(() => {
 dispatch(getCountries());
 return()=>{
  console.log("se desmonto el componente")
 }
}, [dispatch])

  return (
    <div className={style.container}>
    
    <div className={style.filters}> <Filters></Filters></div> 
    <div> <Cards countries={countries}/></div>
    
      
      
     
    </div>
    
  );
}

  