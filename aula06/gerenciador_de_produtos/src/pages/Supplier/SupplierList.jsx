/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from '../../api'

const SupplierList = () => {
    const [suppliers, setSuppliers] = useState([])
    const navigate = useNavigate()
   

    useEffect(() => {
        axios.get('/suppliers')
            .then(response => {
                setSuppliers(response.data)
            })
            .catch(error => console.error("There was an error!", error))
    }, []);

const fetchSuppliers = () => {
    axios.get('/suppliers')
        .then(response => {
            setSuppliers(response.data)
        })
        .catch(error => console.error("There was an error!", error))

}

function deleteSupplier(id) {
    axios.delete(`/suppliers/${id}`)
        .then(() => {
            alert("Fornecedor excluido com sucesso!")
            fetchSuppliers()

        })
        .catch(error => console.error("There was an error!", error))
}



//importado do bootstrap
return (
    <div className='container mt-5'>
        <h2 className='mb-4'>Lista de Fornecedores</h2>
        <button onClick={() => navigate('/add-fornecedor')} className='btn btn-primary mb-2'>Adicionar Fornecedor</button>
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Cnpj</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers.map(supplier => (
                        <tr key={supplier.id}>
                            <td>{supplier.name}</td>
                            <td>{supplier.cnpj}</td>
                            <td>{supplier.email}</td>
                            <td>
                                <button className='btn btn-sm btn-warning mr-2'onClick={() => navigate(`/editar-fornecedores/${supplier.id}`)}>Editar</button>
                                <button onClick={() => deleteSupplier(supplier.id)} className='btn btn-sm btn-danger mr-2'>Excuir</button>

                            </td>

                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>
)
}

export default SupplierList