const API_KEY = 'AIzaSyDS-bxV991xtk42rAcLtqpOTrwhne0R1Co'

const geocodingURI = (search) => {
    return encodeURI(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=${API_KEY}`)
}
module.exports = {
    geocodingURI
}