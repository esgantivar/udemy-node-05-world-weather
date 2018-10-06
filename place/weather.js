const KEY = 'b5bf08b7afb4ae7fc2cde2c9666d18fa';
const axios = require('axios')
const URLByCoords = (coords) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&units=metric&appid=${KEY}`
}

const getWeatherByCoords = async(coords) => {
    const response = await axios.get(URLByCoords(coords));
    return response
}

module.exports = {
    getWeatherByCoords
}