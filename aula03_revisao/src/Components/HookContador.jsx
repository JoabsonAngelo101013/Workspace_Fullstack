import React from 'react'
import { useState } from 'react'

const HookContador = (props) => {
    const [contador, setcontador] = useState(0);
    function contando(){
        setcontador(contador + 1)
    }

    function diminuir (){
        setcontador(contador - 1)
        
    }
  
    

  return (

    <div>
      <h1>
        <h1>O contador esta em {contador}</h1>
        <button onClick={contando}>Adicao</button> <br />
        <button onClick={diminuir}>Diminuir</button>
      </h1>
    </div>
  )
}

export default HookContador
