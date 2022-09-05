
import './App.css'
import React from 'react'
import Navbar from './components/navbar'
import {BrowserRouter as Router,Routes, Route,Navigate} from 'react-router-dom'
import Home from './components/home'
import Signup from './components/signup'
import MovieOverview from './components/movieOverview'
import Error from './components/errorpage'
function App() {

  return (
    <>
    <Router>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='movieOverview/:id' element={<MovieOverview/>}/>
     <Route path='*' element={<Error/>}/>
  </Routes>
</Router>
</>
  )
}

export default App
