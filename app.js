const { argv } = require('./config/yargs')
const places = require('./place/place')
const weather = require('./place/weather')

const getWeather = async(search) => {
    try  {
        const response = await places.getPlace(search)
        const currentWeather = await weather.getWeatherByCoords(response.coords);
        return {
            address: response.address,
            temp: currentWeather.data.main.temp
        }
    } catch (e) {
        throw new Error(`No se pudo determinar el clima en ${search}`);
    }
}

getWeather(argv.address).then((response) => {
    console.log(`El clima en ${response.address} es de ${response.temp} ºC`);
}).catch(e => console.log(e));