import { GET_COUNTRIES, GET_COUNTRY, GET_COUNTRIES_BY_NAME, FILTER_BY_CONTINENT,
  ORDER_BY_NAME, GET_ACTIVITIES, ORDER_BY_POPULATION,FILTER_BY_ACTIVITY,ORDER_BY_DIFFICULTY} from "../actions/types";

const initialState = {
    
countries: [],
filters:[],
country: {},
activities:{},


}


const rootReducer = (state = initialState, action) => {

switch(action.type){
  
  case GET_COUNTRIES: 
  return {
    ...state, 
      countries: action.payload,
     filters: action.payload,
  }
  case GET_COUNTRY: 
  return {
    ...state, 
      country: action.payload,
      } 


  

      case GET_COUNTRIES_BY_NAME: 
      return {
        ...state, 
        countries: action.payload,
          } 

      case GET_ACTIVITIES: {
            return {
              ...state, 
                activities: action.payload,
                } 
              }   

       
      case ORDER_BY_NAME: 
          let copy=[...state.countries]
               copy.sort((a,b) => {
                const nameA = a.name.toUpperCase().replace(/Å/g, 'A'); // Convierte a mayúsculas y reemplaza Å por A
                const nameB = b.name.toUpperCase().replace(/Å/g, 'A');
            if (action.payload === 'asc') {
              // ordenar de menor a mayor
              if (nameA > nameB) return 1;
              if (nameA < nameB) return -1;
              return 0; // Si son iguales, no los muevo de posición.
            } else {
              // ordenar de mayor a menor
              if (nameA> nameB) return -1;
              if (nameB > nameA) return 1;
              return 0; // Si son iguales, no los muevo de posición.
            }
          });
    
          return {
            ...state,
           countries: copy
           
          };
         
      case FILTER_BY_CONTINENT:{
            return{
                ...state,
                countries:action.payload==='All'
                ?state.filters
                :state.filters.filter(c=>c.continent===action.payload)
            }
        }
        
      case ORDER_BY_POPULATION:{
        let copy=[...state.countries]
               copy.sort((a,b) => {
            if (action.payload === 'MEN') {
              // ordenar de menor a mayor
              if (a.population > b.population) return 1;
              if (a.population < b.population) return -1;
              return 0; // Si son iguales, no los muevo de posición.
            } else {
              // ordenar de mayor a menor
              if (a.population> b.population) return -1;
              if (b.population > a.population) return 1;
              return 0; // Si son iguales, no los muevo de posición.
            }
          });

          return {
            ...state,
           countries: copy
           
          };
      }
      case FILTER_BY_ACTIVITY:
        let copys=[...state.activities]
               copys.sort((a,b) => {
                const nameA = a.name.toUpperCase().replace(/Å/g, 'A'); // Convierte a mayúsculas y reemplaza Å por A
                const nameB = b.name.toUpperCase().replace(/Å/g, 'A');
            if (action.payload === 'asc') {
              // ordenar de menor a mayor
              if (nameA > nameB) return 1;
              if (nameA < nameB) return -1;
              return 0; // Si son iguales, no los muevo de posición.
            } else {
              // ordenar de mayor a menor
              if (nameA> nameB) return -1;
              if (nameB > nameA) return 1;
              return 0; // Si son iguales, no los muevo de posición.
            }
          });
    
          return {
            ...state,
           activities: copys
           
          };

          case ORDER_BY_DIFFICULTY:{
            let copys=[...state.activities]
                   copys.sort((a,b) => {
                if (action.payload === 'MEN') {
                  // ordenar de menor a mayor
                  if (a.difficulty > b.difficulty) return 1;
                  if (a.difficulty < b.difficulty) return -1;
                  return 0; // Si son iguales, no los muevo de posición.
                } else {
                  // ordenar de mayor a menor
                  if (a.difficulty> b.difficulty) return -1;
                  if (b.difficulty > a.difficulty) return 1;
                  return 0; // Si son iguales, no los muevo de posición.
                }
              });
    
              return {
                ...state,
                activities: copys
               
              };   
          }

      

  
    
     


  default:
      return { ...state};
  }
}



export default rootReducer;





