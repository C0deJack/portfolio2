import { useEffect, useState } from 'react';
// import { useState } from 'react';
import styled from 'styled-components';
import getData from '../../helpers/getData';
import debounce from '../../helpers/debounce';
import appSettings from '../../appconfig.json';
const settings = appSettings;

// Temp
// import { exampleData } from '../../helpers/exampleWeatherData';

const StyledWeather = styled.div`
    color: ${({ theme }) => theme.color.foreground};
    padding: 0.5rem;
    transition: all 0.4s ease-in-out;

    span {
        margin: auto 0;
    }

    img {
        width: 50px;
    }
`;

export default function Weather() {
    const cityName = 'London,uk';
    const url = `${settings.urls.api.weatherByCityName}${cityName}${settings.keys.weatherApiKey}`;

    const [weather, setWeather] = useState('');
    // const [weather] = useState(exampleData);

    useEffect(() => {
        debounce(
            getData(url)
                .then(data => setWeather(data))
                .catch(() => setWeather('')), // Hide app if error.
            1000,
            true
        );
    }, []);

    return (
        <>
            {weather && (
                <StyledWeather title='local wether'>
                    <span>
                        {weather.name} {Math.round(weather.main.temp)}°C
                    </span>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                </StyledWeather>
            )}
        </>
    );
}
