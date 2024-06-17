/**
 * Weather service for fetching weather data
 */

//Import axios for HTTP requests
import axios from 'axios';

/**
 * Define weather service
 */
const weatherService = {

    /**
     * Fetch current weather in user's location
     * @param {*} latitude Latitude of the user's location
     * @param {*} longitude Longitude of the user's location
     * @returns The weather data for the user's location
     */
    fetchWeather: async (latitude, longitude) => {
        try {
            //API key for open weather api
            const apiKey = "df14cba50ab399dbd0db8d3cd01f5ad5";
            //endpoint to retrieve weather data
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
            //Await get request
            const response = await axios.get(url);
            //Return stringified weather data info
            return `Temperature: ${response.data.main.temp}°C, ${response.data.weather[0].description}`;
        }
        catch (error) {
            console.error("Failed to fetch weather data:\n\n", error);
            return "Unable to fetch weather data.";
        }
    }
};

export default weatherService;