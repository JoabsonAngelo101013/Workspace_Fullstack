import React from 'react'
import Reactlogo from '../assets/img/java.jpeg'

const TrabalhandoComImagens2 = () => {

    function imagem (imagensReact) {

        if (imagensReact ==="public") {

            return <img src="React.jpeg" alt="react" width= '320px' />

        } else  {

            return <img src={Reactlogo} alt="java" />
        }
       
    }
  return (
    <div>
        {imagem("")}

    </div>
  )
}

export default TrabalhandoComImagens2