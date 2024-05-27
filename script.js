import { apiKey } from "./mykey.js";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

const outputElement = document.getElementById('weather-output');

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    const temperature = data.main.temp;
    console.log(temperature)
    const description = data.weather[0].description;
    console.log(description)
    const location = data.name;
    console.log(location)
    outputElement.innerHTML = `<p>Temperature in ${location}: ${temperature}°C</p>
                               <p>Weather: ${description}</p>`;
  })
  .catch(error => {
    console.error('Error:', error);
  });
