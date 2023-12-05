import React from 'react';

const TemperatureConverter = () => {
  const celsiusTemperatures = [25, 30, 15, 10, 20];

  
  const convertCelsiusToFahrenheit = (tempCelsius) => {
    return (tempCelsius * 9/5) + 32;
  };

  return (
    <div>
      {celsiusTemperatures.map((tempCelsius, index) => {
        const tempFahrenheit = convertCelsiusToFahrenheit(tempCelsius);
        return <p key={index}>{tempCelsius} grade Celsius = {tempFahrenheit.toFixed(2)} grade Fahrenheit</p>;
      })}
    </div>
  );
};

export default TemperatureConverter;
