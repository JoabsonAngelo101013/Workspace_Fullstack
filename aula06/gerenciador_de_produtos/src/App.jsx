/* eslint-disable no-unused-vars */
import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar1 from "./components/Navbar1"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import SupplierList from "./pages/Supplier/SupplierList";
import SupplierForm from "./pages/Supplier/SupplierForm";
import ProductList from "./pages/Product/ProductList";
import ProductForm from "./pages/Product/ProductForm";
import CostumerForm from "./pages/Costumer/CostumerForm";
import CostumerList from "./pages/Costumer/CostumerList";
import Initial from "./pages/Ainitial/Initial";




function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbar1/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Initial />} />
            <Route path="/add-fornecedor" element={<SupplierForm/>} />
            <Route path="/listar-fornecedores" element={<SupplierList/>} />
            <Route path="/editar-fornecedores/:id" element={<SupplierForm/>} />
            <Route path="/listar-produtos" element={<ProductList/>} />
            <Route path="/add-produto" element={<ProductForm/>} />
            <Route path="/editar-produtos/:id" element={<ProductForm/>} />
            <Route path="/add-cliente" element={<CostumerForm/>} />
            <Route path="/listar-clientes" element={<CostumerList/>} />
            <Route path="/editar-cliente/:id" element={<CostumerForm/>} />

          </Routes>
        </div>
     </BrowserRouter>
    </>
  )
}

export default App
