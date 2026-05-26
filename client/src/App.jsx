import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Addbook from './pages/Addbook';
import Viewbook from './pages/Viewbook';
import Updatebook from './pages/Updatebook';


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addbook' element={<Addbook/>}/>
          <Route path='/viewbook' element={<Viewbook/>}/>
           <Route path='/updatebook/:id' element={<Updatebook />} />
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
