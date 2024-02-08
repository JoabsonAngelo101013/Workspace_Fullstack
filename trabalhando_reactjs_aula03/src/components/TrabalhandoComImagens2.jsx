import React from 'react'
import Reactlogo from '../assets/img/java.jpeg'

const TrabalhandoComImagens2 = () => {

    function imagem (imagensReact) {

        if (imagensReact ==="public") {

            return <img src="React.jpeg" alt="react" width= '320px' />

        } else if ("assets"){

            return <img src={Reactlogo} alt="java" />
        }
       
    }
  return (
    
    <div>
        <h1>Necessario digitar um valor no retorno imagem("")</h1>

        {imagem("public")}

    </div>
  )
}

export default TrabalhandoComImagens2