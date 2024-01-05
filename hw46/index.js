const container = document.querySelector(".weather-info");

const getWeather = async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);

  const html = `
  <p>City: ${data.name}</p>
  <p>Temperature: ${Math.floor(data.main.temp)}°</p>
  <p>Pressure: ${data.main.pressure} mm</p>
  <p>Description: ${data.weather[0].description}</p>
  <p>Humidity: ${data.main.humidity}%</p>
  <p>Wind speed: ${Math.floor(data.wind.speed)} m/s</p>
  <p>Degrees: ${data.wind.deg}°</p>
  <p>Icon: <img src='http://openweathermap.org/img/w/${
    data.weather[0].icon
  }.png' alt='Weather icon'></p>`;

  container.insertAdjacentHTML("beforeend", html);
};

getWeather(
  "http://api.openweathermap.org/data/2.5/weather?q=TIANJIN&units=metric&APPID=5d066958a60d315387d9492393935c19"
);
