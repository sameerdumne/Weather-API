class WeatherController {
    async getWeatherData(req, res) {
        try {
            const location = req.query.location || 'New York'; // Default location
            const weatherData = await fetchWeatherData(location);
            res.status(200).json(weatherData);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving weather data', error: error.message });
        }
    }
}

export default WeatherController;