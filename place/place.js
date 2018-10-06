const axios = require('axios');
const gcp = require('../config/gcp');

let getPlace = async(search) => {
    const response = await axios.get(gcp.geocodingURI(search))
    const results = response.data.results
    if (results.length > 0) {
        const item = results[0];
        const { lat, lng } = item.geometry.location
        return {
            address: item.formatted_address,
            coords: {
                lat,
                lng
            }
        }
    } else {
        throw new Error('No se encontro nada')
    }
}

module.exports = {
    getPlace
}