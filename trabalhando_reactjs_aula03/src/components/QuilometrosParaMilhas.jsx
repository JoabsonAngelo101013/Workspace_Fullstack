import React from 'react'
import { useState } from 'react';

const QuilometrosParaMilhas = () => {
    const [quilometros, setQuilometros] =  useState('');
    const [milhas, setMilhas] = useState('');
    
    const converterQuilometros = () => {
        const milhasPorQuilometros = 0.63;
        const quilometrosConvertidos = quilometros * milhasPorQuilometros;
        setMilhas(quilometrosConvertidos.toFixed(2));
    }
    
    
  return (
    <div>

        <h1>Converter Distâncias Km / M</h1>

        <label>
            <input type="number"
            value={quilometros} 
            />
        </label>

        <button onClick={converterQuilometros}>Conerter</button>

       <p>{quilometros} Km é aproximado em {milhas} Milhas</p>

        
      
    </div>
  )
}

export default QuilometrosParaMilhas
