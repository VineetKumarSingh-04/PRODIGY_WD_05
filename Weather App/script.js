const apiKey = '4a400b37cf0611555ec7c8926754afe7';

async function getWeather() {
    const city = document.getElementById('city').value;
    const weatherDataDiv = document.getElementById('weatherData');

    weatherDataDiv.innerHTML = '<div class="loader"></div>';

    if (!city) {
        weatherDataDiv.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) throw new Error("City not found. Please try again.");

        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        weatherDataDiv.innerHTML = `<p>${error.message}</p>`;
    }
}

async function getWeatherByLocation(lat, lon) {
    const weatherDataDiv = document.getElementById('weatherData');
    weatherDataDiv.innerHTML = '<div class="loader"></div>';

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) throw new Error("Unable to fetch weather for your location.");

        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        weatherDataDiv.innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeatherData(data) {
    const weatherDataDiv = document.getElementById('weatherData');
    const weatherHTML = `
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
    weatherDataDiv.innerHTML = weatherHTML;

    updateBackground(data.weather[0].main.toLowerCase());
}

function updateBackground(condition) {
    const body = document.body;

    switch (condition) {
        case 'clear':
            body.style.background = 'linear-gradient(to right, #ffcc70, #ff7b54)';
            break;
        case 'clouds':
            body.style.background = 'linear-gradient(to right, #d3d3d3, #808080)';
            break;
        case 'rain':
            body.style.background = 'linear-gradient(to right, #4e73df, #1c3faa)';
            break;
        case 'snow':
            body.style.background = 'linear-gradient(to right, #e8e8e8, #c2c2c2)';
            break;
        case 'thunderstorm':
            body.style.background = 'linear-gradient(to right, #3a3b3c, #1c1c1c)';
            break;
        default:
            body.style.background = 'linear-gradient(to right, #0d1117, #1e2026)';
            break;
    }
}

function fetchUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                getWeatherByLocation(latitude, longitude);
            },
            (error) => {
                const weatherDataDiv = document.getElementById('weatherData');
                weatherDataDiv.innerHTML = `<p>Unable to access your location. Please enter a city manually.</p>`;
            }
        );
    } else {
        const weatherDataDiv = document.getElementById('weatherData');
        weatherDataDiv.innerHTML = `<p>Geolocation is not supported by your browser. Please enter a city manually.</p>`;
    }
}

window.onload = fetchUserLocation;
