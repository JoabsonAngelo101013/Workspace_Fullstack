import React from 'react'
import styles from './Exercicio02Campanha.module.css'

const Exercicio02Campanha = (props) => {

  function defineMenssagem(mes) {

    if (mes === "setembro") {

      return "Prevenção ao suicídio."

    }else if(mes === "outubro"){

      return"Conscientização sobre o câncer de mama"

    }else {

      return "Prevenção e combate ao câncer de prostáta"
    }
    
  }

  function definirCorDeFundo(mes) {

    if (mes === "setembro"){

      return styles.setembroClass

    }else if(mes==="outubro"){

      return styles.outubroClass

    }else {

      return styles.novembroClass
    }
  }

  return (

    <div className={definirCorDeFundo(props.mes)}>
      <p>{defineMenssagem(props.mes)}</p>
      
    </div>
  )
}

export default Exercicio02Campanha
