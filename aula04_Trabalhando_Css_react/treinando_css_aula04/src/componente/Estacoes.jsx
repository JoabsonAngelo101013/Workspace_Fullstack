import React from 'react'
import styles from './Estacoes.module.css'

const Estacoes = (props) => {
    function menssagemEstacao (estacao) {
        if (estacao === "Verão") {
            return "Tempo de Praia e Sol!"
        }else if (estacao === "Outono"){
            return "Folhas caindo Outono chegando!"
        }else if (estacao === "Inverno"){
            return "Epoca de frio e aconchego!"
        }else {
            return "Flores e cores, é Primavera!"
        }
    }

    function coresDasEstacoes(estacao) {
        if (estacao === "Verao"){
            return styles.verao
        }else if (estacao === "Outono"){
            return styles.outono
        }else if (estacao === "Inverno"){
            return styles.inverno
        }else {
            return styles.primavera
        }

    }
  return (
    <div className={coresDasEstacoes(props.estacao)}>
        <p>{menssagemEstacao(props.estacao)}</p>
      
    </div>
  )
}

export default Estacoes
