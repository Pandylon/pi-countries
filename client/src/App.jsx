import { useState,useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import style from "./App.module.css";
import Home from "../src/components/Home/Home"
import Nav from "./components/NavBar/Nav"
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Activities from './components/Activities/Activities';
import LandyngPage from './components/LandinPage/LandingPage';
import axios from "axios";



function App() {
  const location = useLocation()
  
  return (
    <>
      <div className={style.App}>
      {location.pathname !== "/" && <Nav  />}
     <Routes>
      <Route path="/" element={<LandyngPage/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
       <Route path="/countries/:id" element={<Detail />} />
       <Route path="/form" element={<Form />} />
       <Route path="/activities" element={<Activities />} />
       </Routes>
       
     
      </div>
     
    </>
  )
}

export default App
