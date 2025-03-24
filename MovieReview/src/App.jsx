import Description from "./components/description";
import Home from "./components/home";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react'
import Navbar from './components/navbar'
import about from './pages/About'
import movie from './pages/Movie'
import journal from './pages/Journal'

function App() {


  return (
    <Router>
      <Navbar/>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/description' element={<Description/>}/>
   

      </Routes>
      </div>
      
    </Router>
    
  )
}

export default App;
