/* eslint-disable no-unused-vars */

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar1 = () => {

  return (
    <nav className='menu'>
        <div>
            <Link to='/'>Painel de Controle</Link>
            <Link to='/add-fornecedor'>Adicionar Fornecedor</Link>
            <Link to='/listar-fornecedores'>Listar Fornecedores</Link>
            <Link to='/listar-produtos'>Listar Produto</Link>
            <Link to='/add-produto'>Adicionar Produto</Link>
            <Link to='/add-cliente'>Adicionar Cliente</Link>
            <Link to='/listar-clientes'>Listar Clientes</Link>
       </div>

   </nav>
  )
}

export default Navbar1
