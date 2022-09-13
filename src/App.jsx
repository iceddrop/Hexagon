
import './App.css'
import React from 'react'
import Navbar from './components/navbar'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './components/home'
import Signup from './components/signup'
import ShowOverview from './components/showOverview'
import Signin from './components/signin'
import Error from './components/errorpage'
import Footer from './components/footer'

function App() {

  return (
    <>
    <Router>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='movieOverview/:id' element={<ShowOverview/>}/>
     <Route path='/signin' element={<Signin/>}/>
     <Route path='*' element={<Error/>}/>
  </Routes>
</Router>
<Footer/>
</>
  )
}

export default App
