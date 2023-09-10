import { GET_COUNTRIES,GET_COUNTRY,
         GET_COUNTRIES_BY_NAME,ORDER_BY_NAME,
         FILTER_BY_CONTINENT, ORDER_BY_POPULATION,
         GET_ACTIVITIES,FILTER_BY_ACTIVITY,
          ORDER_BY_DIFFICULTY} from "./types";
    
import axios from "axios";



export const getCountries = () => {
    try {
      
        return async function (dispatch){
            const apiData= await axios.get(
                'http://localhost:3001/countries'
            )
            const countries=apiData.data;
            dispatch({type:GET_COUNTRIES, payload:countries})
        }
    } catch (error) {
        console.log(error.message);
    }
};

export const getCountry = (idPais) => {
    try {
      return async function (dispatch){
             const response= await axios.get(
                `http://localhost:3001/countries/${idPais}`
            )
            const country=response.data;
            dispatch({type:GET_COUNTRY, payload:country})
        }
    } catch (error) {
        console.log(error.message);
    }
};


export const getCountriesByName = (name) => {
return async function (dispatch){
    try {
       const response = await axios.get(`http://localhost:3001/countries?name=${name}`)
    const countryByName=response.data
        dispatch({type: GET_COUNTRIES_BY_NAME, payload:countryByName})
    } catch (error) {
        alert('Country not found')
    }
}
}

export const orderCards=(order)=> {
    return { type: ORDER_BY_NAME, payload:order };
  }

  export const filterByContinent=(continent)=>{
    return{ type:FILTER_BY_CONTINENT,payload:continent}
  }

  export const filterBypopulation=(population)=>{
    return{ type:ORDER_BY_POPULATION,payload:population}
  }
  export const getActivities = () => {
    try {
      
        return async function (dispatch){
            const apiData= await axios.get('http://localhost:3001/activities')
            const activity=apiData.data;
            dispatch({type:GET_ACTIVITIES, payload:activity})
        }
    } catch (error) {
        console.log(error.message);
    }
};

export const filterByActivities=(activity)=>{
    return{ type:FILTER_BY_ACTIVITY,payload:activity}
  }

export const filterByDifficulty=(difficulty)=>{
    return{ type:ORDER_BY_DIFFICULTY,payload:difficulty}
  }

 
