import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import style from "./activities.module.css"
import Activity from "./ActivityCard/Activity"
import{getActivities} from "../../Redux/actions/actions"

import Activityfilters from "./ActivityFilters.jsx/ActivityFilters";
const Activities =(props)=> {
  const activities = useSelector(state => state.activities)
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getActivities());
    return()=>{
      console.log("se desmonto el componente")
     }
}, [dispatch])

console.log(activities)


  return (
    <div className={style.container}>

      <Activityfilters></Activityfilters>
      
      <div className={style.containerCards}>
      {activities.length&&activities.map((ac) => {
        return(
        <Activity
          key={ac.id}
          id={ac.id}
          name={ac.name}
          difficulty={ac.difficulty} 
          duration={ac.duration}
          season={ac.season}
          countries={ac.Countries}
          
      
        />
     )})}
     
     </div>
    
     
    </div>
  );
}

export default Activities;

