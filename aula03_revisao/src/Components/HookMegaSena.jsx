import React, {useState} from 'react'


const HookMegaSena = (props) => {
    const [NumeroSorteado, setNumeroSorteado] = useState();
    const [NumerosSorteados, setNumerosSorteados] = useState([]);

    function sortearNumeros() {
        if(NumerosSorteados.length < 6){

        
        let sorteado = Math.floor(Math.random() * 60) +1;
        setNumeroSorteado(sorteado);
        setNumerosSorteados([...NumerosSorteados, sorteado])
    }else {
        alert("Já temos 6 numeros sorteados");
    }
}

  return (
    <div>
      <h1>Sorteador da Mega Sena</h1>
      <button onClick={sortearNumeros}>Sortear Numeros</button>
      <h1>Ultimo numero sorteado: {NumeroSorteado}</h1>
      <h1>Sorteados: {NumerosSorteados.join(" ,")}</h1>
    </div>
  )
}

export default HookMegaSena
