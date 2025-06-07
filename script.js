const apiKey = '885a854cd698ada0484ac09397b1289f'; 

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod !== 200) {
            alert('City not found!');
            return;
        }

        updateWeatherUI(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateWeatherUI(data) {
    document.querySelector('.weather-location h3').textContent = `${data.name}, ${data.sys.country}`;
    document.querySelector('.weather-date').textContent = new Date().toDateString();
    document.querySelector('.weather-condition').textContent = data.weather[0].main;
    document.querySelector('.weather-icon').textContent = getWeatherIcon(data.weather[0].main);
    document.querySelector('.weather-temp').textContent = `${Math.round(data.main.temp)}°F`;
    document.querySelectorAll('.weather-detail')[0].querySelector('p').textContent = `${data.main.humidity}%`;
    document.querySelectorAll('.weather-detail')[1].querySelector('p').textContent = `${data.wind.speed} mph`;
    document.querySelectorAll('.weather-detail')[2].querySelector('p').textContent = `${data.main.pressure} hPa`;
    document.querySelectorAll('.weather-detail')[3].querySelector('p').textContent = `${data.visibility / 1609.34} mi`;
}

function getWeatherIcon(condition) {
    switch (condition.toLowerCase()) {
        case 'clear': return '☀️';
        case 'clouds': return '☁️';
        case 'rain': return '🌧️';
        case 'snow': return '❄️';
        case 'thunderstorm': return '⛈️';
        case 'drizzle': return '🌦️';
        default: return '🌡️';
    }
}


window.onload = () => {
    getWeatherData('New York'); 
};
