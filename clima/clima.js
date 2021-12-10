const axios = require("axios");

const API_KEY = 'SET-KEY-HERE';

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`);

    if(!resp.data.main.temp){
        throw new Error(`No hay resultados para lat: ${lat} y lng: ${lng}`)
        return false;
    }

    return resp.data.main.temp;
}

module.exports = { getClima };

