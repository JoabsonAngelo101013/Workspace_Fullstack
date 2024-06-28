import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from '../../api'

const CostumerList = () => {
    const [costumers, setCostumers] = useState([])  
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/costumers').then(response => {
            setCostumers(response.data)
        }).catch(error => console.error("Ocorreu um erro: ", error))
    }, []);

    const fetchCostumer = () => {
        axios.put(`/costumers/${id}`)
            .then(response => {
                setCostumers(response.data)
            })
            .catch(error => console.error("Ocorreu um erro: ", error))
    }

    
    
    function deleteCostumer(id) {
        axios.delete(`/costumers/${id}`)
        .then(() => {
            alert("Cliente excluído com sucesso!")
            fetchCostumer() // Atualiza a lista após deletar um cliente
        })
        .catch(error => console.error("Ocorreu um erro: ", error))
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Lista de Clientes</h2>
            <button onClick={() => navigate('/add-cliente')} className="btn btn-primary mb-2">Adicionar Cliente</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome:</th>
                        <th>CPF:</th>
                        <th>Email:</th>
                        <th>Endereço Completo:</th>
                        <th>Ações:</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        costumers.map(costumer => (
                            <tr key={costumer.id}>
                                <td>{costumer.name}</td>
                                <td>{costumer.cpf}</td>
                                <td>{costumer.email}</td>
                                <td>{`${costumer.costumerAddressResponse.street},
                                      ${costumer.costumerAddressResponse.number}, 
                                      ${costumer.costumerAddressResponse.neighborhood}, 
                                      ${costumer.costumerAddressResponse.city}, 
                                      ${costumer.costumerAddressResponse.state}, 
                                      ${costumer.costumerAddressResponse.country}`}
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-warning mr-2" onClick={() => navigate(`/editar-cliente/${costumer.id}`)}>Editar</button>
                                    <button onClick={() => deleteCostumer(costumer.id)} className="btn btn-sm btn-danger">Excluir</button>
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