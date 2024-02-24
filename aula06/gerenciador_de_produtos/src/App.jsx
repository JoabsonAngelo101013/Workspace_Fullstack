import React from "react"
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Navbar1 from "./components/Navbar1"





function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbar1/>
     <div className="container">
      
     </div>
     </BrowserRouter>
    </>
  )
}

export default App
