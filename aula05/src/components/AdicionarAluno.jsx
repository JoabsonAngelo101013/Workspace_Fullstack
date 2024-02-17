import axios from 'axios'
import React from 'react'

const AdicionarAluno = () => {

    const addAluno = async () => {
        const response = await axios.post('http://localhost:3000/alunos',
        {
            nome: "Bob Esponja",
            email: "bobesponja@gmail.com"
        }
        );
        console.log(`Foi adicionado o aluno: ${response.data}`)
        alert("Aluno cadastrado com sucesso!");
    }
  return (
    <div>
      <button onClick={addAluno}>Adicionar Bob</button>
    </div>
  )
}

export default AdicionarAluno
