import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api'

const SupplierForm = () => {
    const [supplier, setSupplier] = useState({ name:'', cnpj:'', email:''})
    const navigate = useNavigate()

    function handleChange(event) {
        const {name, value} = event.target;
        setSupplier(prevState => ({...prevState, [name]:value }))
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post('/suppliers', supplier)
        .then(() => {
            alert('Fornecedor Adicionado com sucesso!')
            navigate('/')
        })
        .catch(error => console.error("There was an error!", error))
    }


  return (
    <div className='container mt-5'>
        <h2>Adicionar Fornecedor</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="name">Nome do Fornecedor:</label>
                <input type="text" className='form-control' id='name' name='name' value={supplier.name} onChange={handleChange} required />
            </div>
            <div className='form-group'>
                <label htmlFor="cnpj">Cnpj:</label>
                <input type="text" className='form-control' id='cnpj' name='cnpj' value={supplier.cnpj} onChange={handleChange} required />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email:</label>
                <input type="text" className='form-control' id='email' name='email' value={supplier.email} onChange={handleChange} required />
            </div>
            <button type='submit' className='btn btn-success'>Adicionar</button>
        </form>

    </div>
  )
}

export default SupplierForm