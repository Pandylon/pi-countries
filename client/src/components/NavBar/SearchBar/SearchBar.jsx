import React, { useState } from "react"; 
import style from "./searchBar.module.css";
import {useDispatch} from "react-redux";
import {getCountriesByName} from "../../../Redux/actions/actions"


export default function SearchBar(props) {

  
   const dispatch=useDispatch();
   const [name,setName]=useState("")

   const changeHandler=(event)=>{
    //leer lo que escribi y cambiar el estado ya sea en name, dificult duration etc
    // el evento me trae la indormacion 
      setName(event.target.value)
         }

        const suBmitHandler=(event)=>{
          event.preventDefault();
          if (!name) return alert('Enter a country please');
    
          // Verificamos si la entrada tiene al menos 3 caracteres
          if (name.length >= 3) {
            dispatch(getCountriesByName(name)); // Llamar a la acción con el nombre completo
          } else {
            // Si la entrada tiene menos de 3 caracteres, puedes realizar una búsqueda diferente
            // Por ejemplo, puedes buscar por las primeras tres letras
            alert("ingresar las 3 letras")
          }
         
          setName('')

        }

  return (
    <div className={style.container}>
   <div className={style.inputs} >
     <input type="text" 
            value={name} 
           onChange={changeHandler} placeholder="Search..." ></input>
           
         
     
     </div>
      <button className={style.button}
       type="submit"
       onClick={suBmitHandler}
      >
        search
      </button>
    </div>
  );
}



