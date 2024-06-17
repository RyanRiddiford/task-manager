//Import dependencies
import React from 'react';
import { Alert, Spinner } from 'reactstrap';
import useWeather from '../hooks/useWeather'; // Import the useWeather hook

/**
 * Weather component for displaying weather data
 * Utilizes the useWeather hook to fetch and display current weather data based on the user's geolocation.
 * @returns The weather component rendering an Alert with the weather data
 */
const Weather = () => {
    //Custom hook to manage weather data
    const { weather, loading } = useWeather();

    return (
        <Alert className='weather-ui' color="info">
            <h4>Current Weather:</h4>
            {loading ? (
                <div className="d-flex align-items-center">
                    <Spinner style={{ width: '3rem', height: '3rem' }} />
                </div>
            ) : (
                <p>{weather}</p>
            )}
        </Alert>
    );
};

export default Weather;
