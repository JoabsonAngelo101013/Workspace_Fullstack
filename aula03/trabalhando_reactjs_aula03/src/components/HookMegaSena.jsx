import React, {useState} from 'react'
import '../assets/./megaSena.css'

const HookMegaSena = () => {
  const [NumeroSorteado, setNumeroSorteado] = useState();
  const [NumerosSorteados, setNumerosSorteados] = useState([]);

  function sortearNumero () {
    if(NumerosSorteados.length < 6) {

     /* let sorteado = Math.floor(Math.random() * 60) + 1;
      setNumeroSorteado(sorteado);
      setNumerosSorteados([...NumerosSorteados,sorteado]); */

      /*Para gerear um sorteio sem repetir numeos já sorteados */
      let sorteado;

      do{
        sorteado = Math.floor(Math.random() * 60) + 1;
      }while (NumerosSorteados.includes(sorteado));

        setNumeroSorteado(sorteado);
        setNumerosSorteados([...NumerosSorteados,sorteado]);
      }else{

      alert("Já foram sorteados os 6 numero !: ==> " + NumerosSorteados.join(' - ')+"  <==")   /*concatenando para retornar os números sorteados no alert*/
    }
  }

   
 return(
  <div>
    
    <h1>Sorteio da MegaSena</h1>
    <button onClick={sortearNumero}>Sortear Mega</button>

    <h2>Números Sorteados: {NumerosSorteados.join(' - ')} </h2>
    <h2>Ultimo Número Sorteado: {NumeroSorteado} </h2>

   
  </div>
 )
}

export default HookMegaSena
