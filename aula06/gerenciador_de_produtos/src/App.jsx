import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar1 from "./components/Navbar1"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import SupplierList from "./pages/Supplier/SupplierList";
import SupplierForm from "./pages/Supplier/SupplierForm";



function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbar1/>
        <div className="container">
          <Routes>
            <Route path="/" element={<SupplierList />} />
            <Route path="/add-fornecedor" element={<SupplierForm/>} />
            <Route path="/listar-fornecedores" element={<SupplierList/>} />
          </Routes>
        </div>
     </BrowserRouter>
    </>
  )
}

export default App
