import React, { useState } from 'react'

const FahrenheitParaCelcius = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('')

  const converterParaCelcius = () =>{
    const temperaturaCelcius = (parseFloat(fahrenheit - 32)* 5/9);
  }
  return (
    <div>
      <h2>Converter de Fahrenheit Para Celcius</h2>
      <label>
        Fahrenheit:
        <input type="number"
        value={fahrenheit}
        onChange={(e) => setFahrenheit(e.target.value)}  />
      </label>

      <button onClick={converterParaCelcius}>Converter</button>
      <p>Celcius: {celsius}</p>
      
    </div>
  )
}

export default FahrenheitParaCelcius
