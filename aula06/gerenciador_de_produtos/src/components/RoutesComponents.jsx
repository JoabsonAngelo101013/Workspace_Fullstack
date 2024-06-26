import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SupplierList from '../pages/Supplier/SupplierList';
import SupplierForm from '../pages/Supplier/SupplierForm';
import ProductList from '../pages/Product/ProductList';
import ProductForm from '../pages/Product/ProductForm';
import CostumerForm from '../pages/Costumer/CostumerForm';
import CostumerList from '../pages/Costumer/CostumerList';
import Login from '../pages/Login/Login';
import PrivateRoute from './PrivateRoute';
import Logout from '../pages/Login/Logout';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={SupplierList} />} />
      <Route path="/add-fornecedor" element={<PrivateRoute element={SupplierForm} />} />
      <Route path="/listar-fornecedores" element={<PrivateRoute element={SupplierList} />} />
      <Route path="/editar-fornecedor/:id" element={<PrivateRoute element={SupplierForm} />} />
      <Route path="/listar-produtos" element={<PrivateRoute element={ProductList} />} />
      <Route path="/add-produto" element={<PrivateRoute element={ProductForm} />} />
      <Route path="/editar-produto/:id" element={<PrivateRoute element={ProductForm} />} />
      <Route path="/add-cliente" element={<PrivateRoute element={CostumerForm} />} />
      <Route path="/listar-clientes" element={<PrivateRoute element={CostumerList}/>} />
      <Route path="/editar-cliente/:id" element={<PrivateRoute element={CostumerForm}/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<PrivateRoute element={Logout}/>} />
    </Routes>
  );
};

export default RoutesComponent;