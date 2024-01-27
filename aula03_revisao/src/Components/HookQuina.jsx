import React, { useState } from 'react'

const HookQuina = () => {
    const [NumeroSorteado, setNumeroSorteado] = useState();
    const [NumerosSorteados, setNumerosSorteados] = useState([]);

    function sortearNumeros() {
        if (NumerosSorteados.length < 5){


        let sorteado = Math.floor(Math.random() * 80) + 1;
        setNumeroSorteado(sorteado)
        setNumerosSorteados([...NumerosSorteados, sorteado]);
        

        }else {
            alert("Ja foram sorteados os 5 N]úmeros:")
        }
    }
  return (

    <div>
      <h1>SORTEANDO NUMEROS DA QUINA</h1>
      <button onClick={sortearNumeros}>Sortear Números</button>

      <h2>Último Número Sorteado: {NumeroSorteado}</h2>
      <h2>Sorteados: {NumerosSorteados.join(" - ")}</h2>
    </div>
  )
}

export default HookQuina
