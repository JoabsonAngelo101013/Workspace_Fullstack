import React, { useState } from 'react'
import '../assets/conversorTemperatura.css'

const FahrenheitParaCelcius = () => {
    const [ celcius, setCelcius]  = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    function calculando ()  {
        const novoCelcius = (fahrenheit - 32) / 1.8;
        setCelcius(novoCelcius.toFixed(2));
    }
  return (
    <div id='conversor'>

        <h1>Conversor de Temperatura Celsius para Fahrenheit</h1>

        <label>

            <input 
            type="number"
            value={fahrenheit}
            onChange={(e) => setFahrenheit(e.target.value)} />

        </label>
        

        <p>{fahrenheit}°F é o mesmo que {celcius}°C</p>

        <button id='btn' onClick={calculando}>Converter</button>
      
    </div>
  )
}

export default FahrenheitParaCelcius
