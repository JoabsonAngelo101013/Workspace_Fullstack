import React from 'react'


const PrecisoEstudar = (props) => {
 

  return (
    <div>
      <h1>Preciso estudar {props.tecnologia}</h1>
    </div>
  );
}

export default PrecisoEstudar


 //Foi definido um "props" no elemento pai (app.jsx) com o valor :  <PrecisoEstudar tecnologia={"java"} />
 //para que retorne no elemento filho esse valor e apresenter na tela.