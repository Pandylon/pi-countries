import React from "react";
import SearchBar from "./SearchBar/SearchBar";
//import Activities from "../Activities/Activities";
import style from "./nav.module.css";
import { Link } from "react-router-dom";
import Filters from "./Filters/Filters"
import Activityfilters from "../Activities/ActivityFilters.jsx/ActivityFilters";


export default function Nav(props) {
  return (
    <div className={style.container}>
      <Link to="/home">HOME</Link>.
      <Link to="/form">ADD ACTIVITY 📝</Link>
      <Link to="/activities"> ACTIVITIES 🌏</Link>
      
      <SearchBar />
      
      
     
      
    
     
    </div>
  );
}

