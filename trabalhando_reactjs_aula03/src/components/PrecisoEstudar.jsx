import React from 'react'

const PrecisoEstudar = (props) => {
  const tecnologia = "Java, Spring";


  return (
    <div>
      <h1>Preciso estudar {props.tecnologia}</h1>

    </div>
  )
}

export default PrecisoEstudar


//foi nescessario criar uma const tecnologia como parametro de string com a(s) tecnologias.
//ex: const tecnologia = "Java, JavaScript"  