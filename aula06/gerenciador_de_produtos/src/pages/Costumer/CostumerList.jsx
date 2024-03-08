
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../../api'

const CostumerList = () => {
    const [costumers, setCostumers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/costumers')
        .then(response => {
            setCostumers(response.data)
        })
        .catch(error => console.error("Nao foi encontrada a Lista de Clientes.", error))
    },[]);

    const fetchCostumers = () => {
        axios.get('/costumers')
        .then(response => {
            setCostumers(response.data)
        })
        .catch(error => console.error("Nao foi encontrada a Lista de Clientes.", error))
    }

    function deleteCostumers(id) {
        axios.delete(`/costumers/${id}`)
        .then(() => {
            alert("Cliente Excluido com sucesso!")
            fetchCostumers()
        })
        .catch(error => console.error("Cliente Nao foi excluido, verifique novamente!", error))
    }
  return (
    <div className='container mt-5'>
        <h2 className='mb-4'>Lista de Clientes</h2>
        <button onClick={() => navigate('/add-cliente')} className='btn btn-primary mb-2'>Adicionar Clientes</button>

        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Cpf</th>
                    <th>Email</th>
                    <th>Cep</th>
                    <th>Rua</th>
                    <th>Número</th>
                    <th>Bairro</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                    <th>País</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    costumers.map(costumer => (
                        <tr key={costumer.id}>
                            <td>{costumer.name}</td>
                            <td>{costumer.cpf}</td>
                            <td>{costumer.email}</td>
                            <td>{costumer.zipcode}</td>
                            <td>{costumer.street}</td>
                            <td>{costumer.number}</td>
                            <td>{costumer.neighborhood}</td>
                            <td>{costumer.city}</td>
                            <td>{costumer.state}</td>
                            <td>{costumer.country}</td>

                            <td>
                                <button className='btn btn-sm btn-warning mr-2'onClick={() => navigate(`/editar-cliente/${costumer.id}`)}>Editar</button>
                                <button onClick={() => deleteCostumers(costumer.id)} className='btn btn-sm btn-danger mr2'>Excluir</button>
                            </td>

                        </tr>
                    ))
                }
            </tbody>

        </table>

    </div>
  )
}

export default CostumerList