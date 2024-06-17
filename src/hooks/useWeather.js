/**
 * Hook for providing current weather data of user's location
 */

//Import dependencies
import { useState, useEffect } from 'react';
import weatherService from '../services/weatherService';

/**
 * Custom React hook for fetching and providing the current weather data
 * @returns Custom React hook
 */
const useWeather = () => {
    //weather prop for storing user's weather data
    const [weather, setWeather] = useState('');
    const [loading, setLoading] = useState(true);

    /**
     * Instantiates weather data
     */
    useEffect(() => {
        const fetchWeatherData = async (latitude, longitude) => {
            try {
                const weatherData = await weatherService.fetchWeather(latitude, longitude);
                setWeather(weatherData);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch weather data:', error);
                setWeather('Unable to fetch weather data.');
                setLoading(false);
            }
        };

        const geoSuccess = (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude);
        };

        const geoError = (error) => {
            console.error('Geolocation error:', error);
            setWeather('Unable to fetch weather data due to geolocation error.');
            setLoading(false);
        };

        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

        return () => navigator.geolocation.clearWatch(geoSuccess, geoError);
    }, []);

    return { weather, loading };
};

export default useWeather;