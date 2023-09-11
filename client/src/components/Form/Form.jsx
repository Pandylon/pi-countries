import React, { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {getCountries} from "../../Redux/actions/actions"
import validation from './validation'; 

import axios from 'axios';
import style from './form.module.css';


export default function Form() {

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const activities =useSelector((state) => state.activities);
  console.log(activities)

useEffect(() => {
  dispatch(getCountries());
  return()=>{
   console.log("se desmonto el componente")
  }
 }, [dispatch])

 
 const [error,setError]=useState({
  name: '',
    difficulty: '',
    duration: '',
    season: '',
 })

  const [form, setForm] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countryName: []
  });


  const changeHandler=(event)=>{
    //leer lo que escribi y cambiar el estado ya sea en name, dificult duration etc
    // el evento me trae la inormacion 
     
     if(event.target.name ==="countryName"){
      if(form.countryName.includes(event.target.value))return
      setForm({
        ...form,
        [event.target.name]:[...form[event.target.name],event.target.value]})
     }else{    
       setForm({
        ...form,
        [event.target.name]:event.target.value
           })}
         setError(validation({
          ...form,
        [event.target.name]:event.target.value
         },event.target.name))

             }
  const changeDelete= (event)=>{
    setForm({
      ...form,
      [event.target.name]:[...form[event.target.name].filter(p=> p!==event.target.id)]})
  }
  const disableFunction = ()=>{
    let disabledAux = true;
    for(let err in error){
      if(error[err]==="") disabledAux = false;
      else{
        disabledAux = true;
        break;
      }
    }
    return disabledAux;
  }

  const generateTimeOptions = () => {
    const options = [];
    for (let hours = 0; hours <= 24; hours++) {
      for (let minutes = 0; minutes < 60; minutes += 15) {
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const time = `${formattedHours}:${formattedMinutes}`;
        options.push(time);
      }
    }
    return options;
  };


  

  const suBmitHandler = (event) => {
    event.preventDefault();
    const isNameAlreadyExists = activities.some((activity) => activity.name === form.name);

  if (isNameAlreadyExists) {
    alert('El nombre de la actividad ya existe. Por favor, elija otro nombre.');
    
    } else {
    axios
      .post("http://localhost:3001/activities", form)
      .then((res) => {
        alert('Actividad registrada con éxito');
        setForm({
          name: "",
          difficulty: "",
          duration: "",
          season: "",
          countryName: []
        })
      })
      .catch((err) => {alert('Hubo un error al registrar la actividad')});
    }
    };

    

  return (
    <div className={style.container}>
             
    <form className={style.form} onSubmit={suBmitHandler}>
   
       
        <h1 className={style.title}>"New activity"</h1>

       <div className={style.inputContainer}>

         <label> Activity name </label>
         <input className={style.input} type="text" value={form.name}  onChange={changeHandler} name="name"></input>  
         
       </div>
       <p >{error.name && error.name}</p>
       <div className={style.inputContainer}>

       
       <select value={form.duration} onChange={changeHandler} name="duration">
    <option value="">Select duration</option>
    {generateTimeOptions().map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
       <p >{error.duration && error.duration}</p>
       </div>

       <select  value={form.difficulty} onChange={changeHandler} name="difficulty" className={style.inputContainer}>
                     <option >Select difficulty</option>
          {
             ['1','2','3','4','5'].map(n=><option key={n} value={n}>{n}</option>)
          }
   
       </select>
       <p >{error.difficulty && error.difficulty}</p>
       <select value={form.season} onChange={changeHandler} name="season" className={style.inputContainer}>
                      <option>Select season</option>
         {
             ['Summer','Autumn','Winter','Spring'].map(s=><option value={s} key={s}>{s}</option>)
          }
      
        </select>
        <p >{error.season && error.season}</p>
        <select value={form.countryName} onChange={changeHandler} name="countryName" className={style.inputContainer}>
                       <option>Select country</option>
         {
            countries.map((p)=><option value={p.name} key={p.id}>{p.name}</option>)
         }
   
         </select> 
         <label>{error.countryName}</label>
       <div >
          {
            form.countryName.map((p)=><div className={style.selectCountry} key={p}>
             <button  name="countryName" id={p}  onClick={changeDelete}>x</button>
             <p>{p}</p></div>)
          }
      </div>
  
  


        <button className={style.submitBtn} disabled={disableFunction()} type="submit">SUBMIT</button>

   
    </form>
     </div>
  );
}

    


    
    

     




