import Description from "./components/description";
import Home from "./components/home";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {


  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/description' element={<Description/>}/>

      </Routes>
    </Router>
  )
}

export default App
