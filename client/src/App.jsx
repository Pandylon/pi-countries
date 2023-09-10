import { useState,useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import style from "./App.module.css";
import Home from "../src/components/Home/Home"
import Nav from "./components/NavBar/Nav"
import Detail from './components/Detail/Detal';
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
/*
  const [count, setCount] = useState(0)

<a href="https://vitejs.dev" target="_blank">
<img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
<img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React hola </h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
count is {count}
</button>
<p>
Edit <code>src/App.jsx</code> and save to test HMR
</p>
<p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/


      /*  <Nav></Nav>
       <Routes>
        <Route path="/countries" element={<Home countries={countries}/>}></Route>
       </Routes>*/ 

       //<Nav></Nav>
        //<Nav></Nav>