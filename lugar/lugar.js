const axios = require("axios");

const API_KEY = 'SET-KET-HERE';

const getLatlng = async (ciudad) => {
    const encodedUrl = encodeURI(ciudad);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=${API_KEY}`
    });

    const resp = await instance.get();

    if(resp.data.coord.length === 0){
        throw new Error(`No hay resultados para ${ciudad}`)
    }
    const data = resp.data.coord;
    const direccion = resp.data.name + ", " + resp.data.sys.country;
    const lat = resp.data.coord.lat;
    const lon = resp.data.coord.lon;

    return {
        direccion, lat, lon
    }
}

module.exports = {getLatlng};

