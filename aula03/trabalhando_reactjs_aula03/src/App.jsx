import Aluno from "./components/Aluno"

function App() {
  const aluno1 ={
    nome: "Joabson",
    email: "Joabsonangelo@gmail.com",
    curso: "Curso Fullstack"
  }
  const aluno2 = {
    nome: "Maria",
    email:"Maria@gmail.com",
    curso:"Curso Fullstack"
  }

  const alunos = [aluno1, aluno2];
  
  return (
   <div>{
    alunos.map((aluno) => (
      <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso}/>
    ))
    }

   </div>
  )
}

export default App 