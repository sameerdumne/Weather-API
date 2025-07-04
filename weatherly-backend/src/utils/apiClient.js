import axios from 'axios';

const API_KEY = '885a854cd698ada0484ac09397b1289f'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching weather data: ' + error.message);
    }
};
