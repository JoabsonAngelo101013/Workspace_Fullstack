import { useState } from 'react'
import Aluno from './Components/Aluno'


const App=() => {
  const aluno1 = {
    nome: "João",
    email: "email@email.com",
    curso: "Sistema para internet"
}
const aluno2 = {
    nome: "Jose",
    email: "email@email.com",
    curso: "Curso Fullstack "
}
const aluno3 = {
    nome: "Maria",
    email: "email@email.com",
    curso: "Curso Fullstack"
}

const alunos = [aluno1, aluno2, aluno3];

  return (
  
    <div>
    {
          alunos.map((aluno) => (
              <Aluno nome={aluno.nome}
              email={aluno.email} 
              curso={aluno.curso} />
          ))
      }
  </div>
    
  )
}

export default App
