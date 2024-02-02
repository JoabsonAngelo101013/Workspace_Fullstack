import React, { useState } from 'react'

const MilhasParaQuilometros = () => {
    const [milha, setMilha] = useState('');
    const [quilometro, setQuilometro] = useState('');

        const converterMilha = () => {
            const quilometroConvertido = milha * 1.63;
            setQuilometro(quilometroConvertido.toFixed(2));
        }
    
  return (
    <div>
        <h1>Converter M / Km</h1>

        <label>
            <input 
            type="number"
            value={milha}
            onChange={(e) => setMilha(e.target.value)}
             />
        </label>

        <button onClick={converterMilha}>Converter</button>

        <p>{milha} M é aproximadamente em {quilometro} Km!</p>
      
    </div>
  )
}

export default MilhasParaQuilometros
