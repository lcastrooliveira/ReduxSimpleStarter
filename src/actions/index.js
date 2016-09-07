import axios from 'axios';

import * as keys from '../key';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${keys.API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},br`;
    //returns a promisse
    const request = axios.get(url);    

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}