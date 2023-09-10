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

/*const handleChangeOrder=(event)=>{
  const selectedValue= event.target.value;
  dispatch(orderCards(selectedValue))

 }

 const handlerFilterByContinent = (event) => {
  const continent = event.target.value;
  dispatch(filterByContinent(continent))
}
const handlerFilterBypopulation = (event) => {
  const population = event.target.value;
  dispatch(filterBypopulation(population))
}*/
const paginato=(event)=>{
 dispatch(page())
}

  return (
    <div className={style.container}>
    
    <div className={style.filters}> <Filters></Filters></div> 
    <div> <Cards countries={countries}/></div>
    
      
      
     
    </div>
    
  );
}

  