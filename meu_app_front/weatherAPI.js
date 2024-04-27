
// Função para buscar dados do tempo
const fetchWeather = async (city, apiKey) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    const response = await fetch(apiWeatherURL);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      console.error("Erro ao buscar dados do tempo");
    }
  };
  
  // Função para exibir a previsão do tempo
  const displayWeather = (data) => {
    const weatherComponent = document.getElementById("weather-component");
    weatherComponent.classList.remove("hide");
  
    const weatherCity = document.getElementById("weather-city");
    const weatherTemperature = document.getElementById("weather-temperature");
    const weatherDescription = document.getElementById("weather-description");
    const weatherHumidity = document.getElementById("weather-humidity");
    const weatherWind = document.getElementById("weather-wind");
    const weatherIcon = document.getElementById("weather-icon");
  
    // Adicionar valores padrões para prevenir campos vazios
    const temperature = data.main.temp ? `${parseInt(data.main.temp)}°C` : "--°C";
    const humidity = data.main.humidity ? `${data.main.humidity}%` : "--%";
    const windSpeed = data.wind.speed ? `${data.wind.speed} km/h` : "-- km/h";
  
    weatherCity.innerText = data.name;
    weatherTemperature.innerText = temperature;
    weatherDescription.innerText = data.weather[0].description || "N/A";
    weatherHumidity.innerText = `Umidade: ${humidity}`;
    weatherWind.innerText = `Vento: ${windSpeed}`;
    
    // Adicionar o ícone do tempo, se disponível
    if (data.weather[0].icon) {
      weatherIcon.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      );
    } else {
      weatherIcon.setAttribute("src", ""); // Ou um ícone padrão se não estiver disponível
    }
  };
  
  
  // Evento para buscar a previsão do tempo
  const searchButton = document.getElementById("search-btn");
  searchButton.addEventListener("click", () => {
    const cityInput = document.getElementById("city-input").value;
    const apiKey = "d3c4a4941be120f7a77030fd28d44584"; // Coloque sua chave da API aqui
    fetchWeather(cityInput, apiKey);
  });
  
  