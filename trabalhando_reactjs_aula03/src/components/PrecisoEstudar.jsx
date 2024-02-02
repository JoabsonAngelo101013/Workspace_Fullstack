import React from 'react'

const PrecisoEstudar = (props) => {
  return (
    <div>
      <h1>Preciso estudar é: {props.tecnologia}</h1>
    </div>
  )
}

export default PrecisoEstudar


//foi nescessario criar uma consttecnologia como parametro de string com a(s) tecnologias.
//ex: const tecnologia = "Java, JavaScript"  