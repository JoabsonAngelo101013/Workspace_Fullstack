import { useState } from "react";


const ConversorTemperatura = () => {

  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const converterParaFahrenheit = () => {
    const temperaturaFahrenheit = (parseFloat(celsius) * 9/5) + 32;
    setFahrenheit(temperaturaFahrenheit.toFixed(2));
  };

  return (
    <div>
      <h2>Conversor de Temperatura</h2>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />
      </label>
      <button onClick={converterParaFahrenheit}>Converter</button>
      <p>Fahrenheit: {fahrenheit}</p>
    </div>
  );
};

export default ConversorTemperatura;


//Criar as avriaveis para calcular as conversões