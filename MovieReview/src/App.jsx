import React from 'react'
import Navbar from './components/navbar'
import home from './pages/Home'
import about from './pages/About'
import movie from './pages/Movie'
import journal from './pages/Journal'
import { Route,Routes, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <div>
        <Routes>
          <Route exact path="/" component={home}></Route>
          <Route path="/about" component={about}></Route>
          <Route path="/movie" component={movie}></Route>
          <Route path="/journal" component={journal}></Route>
        </Routes>
          
        </div>
      </Router>
    </div>
  )
}

export default App
