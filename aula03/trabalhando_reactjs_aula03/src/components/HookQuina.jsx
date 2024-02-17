import React, { useState } from "react"

const HookQuina = () => {
    const [NumeroSorteado, setNumeroSorteado] = useState();
    const [NumerosSorteados, setNumerosSorteados] = useState([]);

    function sortearNumeros() {
        if(NumerosSorteados.length < 5 ){

            let sorteado = Math.floor(Math.random() * 80) + 1;
            setNumeroSorteado(sorteado)
            setNumerosSorteados([...NumerosSorteados, sorteado]);

        }else {

            alert("Já Foram Sorteados os 5 Números!")
        }

    }
  return (
    <div>
        <h1>Sorteador Da Quina</h1>
        <button onClick={sortearNumeros}>Sortear Números</button>

        <h2>Números Sorteados: {NumeroSorteado}</h2>
        <p>Último número sorteado: {NumerosSorteados.join('-')}</p>
    </div>
  )
}

export default HookQuina
