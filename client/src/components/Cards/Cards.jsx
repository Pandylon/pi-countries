import React from "react";
import { useState, useEffect } from "react";
import Card from "./Singular/Card"
import style from "./cards.module.css";
import { useSelector } from "react-redux"
import Paginated from "../Paginated/Paginated";


const Cards =()=> {

  const countries = useSelector(state => state.countries)
/*const countries=[
	{
		"id": 1,
		"name": "Kenya",
		"flag": "https://flagcdn.com/w320/ke.png",
		"continent": "Africa",
		"capital": "Nairobi",
		"subregion": "Eastern Africa",
		"area": 580367,
		"population": 53771300
	},
	{
		"id": 2,
		"name": "San Marino",
		"flag": "https://flagcdn.com/w320/sm.png",
		"continent": "Europe",
		"capital": "City of San Marino",
		"subregion": "Southern Europe",
		"area": 61,
		"population": 33938
	},
	{
		"id": 3,
		"name": "French Polynesia",
		"flag": "https://flagcdn.com/w320/pf.png",
		"continent": "Oceania",
		"capital": "Papeete",
		"subregion": "Polynesia",
		"area": 4167,
		"population": 280904
	},
	{
		"id": 4,
		"name": "Sierra Leone",
		"flag": "https://flagcdn.com/w320/sl.png",
		"continent": "Africa",
		"capital": "Freetown",
		"subregion": "Western Africa",
		"area": 71740,
		"population": 7976985
	},
	{
		"id": 5,
		"name": "Madagascar",
		"flag": "https://flagcdn.com/w320/mg.png",
		"continent": "Africa",
		"capital": "Antananarivo",
		"subregion": "Eastern Africa",
		"area": 587041,
		"population": 27691019
	},
	{
		"id": 6,
		"name": "Nigeria",
		"flag": "https://flagcdn.com/w320/ng.png",
		"continent": "Africa",
		"capital": "Abuja",
		"subregion": "Western Africa",
		"area": 923768,
		"population": 206139587
	},
	{
		"id": 7,
		"name": "Jordan",
		"flag": "https://flagcdn.com/w320/jo.png",
		"continent": "Asia",
		"capital": "Amman",
		"subregion": "Western Asia",
		"area": 89342,
		"population": 10203140
	},
	{
		"id": 8,
		"name": "Libya",
		"flag": "https://flagcdn.com/w320/ly.png",
		"continent": "Africa",
		"capital": "Tripoli",
		"subregion": "Northern Africa",
		"area": 1759540,
		"population": 6871287
	},
	{
		"id": 9,
		"name": "Guyana",
		"flag": "https://flagcdn.com/w320/gy.png",
		"continent": "South America",
		"capital": "Georgetown",
		"subregion": "South America",
		"area": 214969,
		"population": 786559
	},
	{
		"id": 10,
		"name": "Mexico",
		"flag": "https://flagcdn.com/w320/mx.png",
		"continent": "North America",
		"capital": "Mexico City",
		"subregion": "North America",
		"area": 1964375,
		"population": 128932753
	},
	{
		"id": 11,
		"name": "Turkmenistan",
		"flag": "https://flagcdn.com/w320/tm.png",
		"continent": "Asia",
		"capital": "Ashgabat",
		"subregion": "Central Asia",
		"area": 488100,
		"population": 6031187
	}]*/
 
  //paginado
  const totalCards=countries.length;
  const[cardsPerPage,setCardsPerPage]=useState(10);//productospor pagina
  const[currentPage,setCurrentPage]=useState(1)
  const lasIndex=currentPage * cardsPerPage
  const firsIndex=lasIndex -cardsPerPage
 

  return (
	<div className={style.container}>
 
    <div className={style.containerCards}>
      {countries.map((country) => (
        <Card
          key={country.id}
          id={country.id}
		  code={country.code}
          name={country.name}
          flag={country.flag}
          onClose={country.onClose}
          continent={country.continent}
          subregion={country.subregion}
          area={country.area}
          population={country.population}
		  activities={country.Activities}
        />
     )).slice(firsIndex,lasIndex)}
	 
    
    </div>

	<div><Paginated 
      currentPage={currentPage} 
      cardsPerPage={cardsPerPage}
      setCurrentPage={setCurrentPage}
      totalCards={totalCards}></Paginated>
	</div>
	
	</div>
  );
}

export default Cards;