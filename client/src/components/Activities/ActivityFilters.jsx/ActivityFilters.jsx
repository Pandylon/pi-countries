
import {  useDispatch } from "react-redux";
import style from "./activityFilters"
import {filterByActivities,filterByDifficulty} from "../../../Redux/actions/actions"



export default function Activityfilters() {
  const dispatch = useDispatch();

  const handleChangeOrder=(event)=>{
    const selectedValue= event.target.value;
    
    dispatch(filterByActivities(selectedValue))
  
   }

   const handlerFilterByDifficulty = (event) => {
    const difficulty = event.target.value;
    dispatch(filterByDifficulty(difficulty))
  }

 




  return (
    <div  className={style.conteiner}>
      
        
      <div >
        <select onChange={handleChangeOrder}>
          
          <option value='asc'>A-Z</option>
          <option value="des">Z-A</option>
        </select>
       </div>
       <div >
        <select onChange={handlerFilterByDifficulty}>
          
          <option value='MAY'>Mayor difficulty</option>
          <option value="MEN">menor difficulty</option>
        </select>
            </div>


       </div>

       
  )


    
}