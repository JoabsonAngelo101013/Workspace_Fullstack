import React, { useState } from 'react'
import '../assets/conversorTemperatura.css'

const CelciusParaFahrenheit = () => {
    const [ celcius, setCelcius]  = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    function calculando ()  {
        const novoFahrenheit = celcius * 1.8 + 32;
        setFahrenheit(novoFahrenheit);
    }
  return (
    <div id='conversor'>
        <h1>Conversor de Temperatura Celsius para Fahrenheit</h1>
        <label>
            <input 
            type="number"
            value={celcius}
            onChange={(e) => setCelcius(e.target.value)} />
        </label>
        

        <p>{celcius}°C é o mesmo que {fahrenheit}°F</p>

        <button id='btn' onClick={calculando}>Converter</button>
      
    </div>
  )
}

export default CelciusParaFahrenheit

