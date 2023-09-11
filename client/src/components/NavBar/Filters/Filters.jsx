//import { useEffect } from "react";
//import style from "filters.module.css"
import { connect, useSelector, useDispatch } from "react-redux";
 //import { orderCards } from "../../../Redux/actions/actions";
//import Card from "../Cards/Singular/Card";
import {getCountries,orderCards,filterByContinent,filterBypopulation} from "../../../Redux/actions/actions"



export default function Filters() {
  const dispatch = useDispatch();

  const handleChangeOrder=(event)=>{
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
  }


 



  return (
    <div >
      
        
      <div >
        <select onChange={handleChangeOrder}>
        <option value="sort">Sort</option>
          <option value='asc'>A-Z</option>
          <option value="des">Z-A</option>
        </select>
       
       <select  onChange={handlerFilterByContinent}>
                <option value="All">All continents</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="South America" >South America</option>
                <option value="Europe">Europa</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
            </select>
           
        <select onChange={handlerFilterBypopulation}>
          
          <option value='MAY'>Larger population</option>
          <option value="MEN">Smaller population</option>
        </select>
</div>


      
    </div>
  );
}