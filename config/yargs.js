const { argv } = require('yargs').options({
    address: {
        demand: true,
        alias: 'a',
        desc: 'Dirección del lugar a buscar'
    }
})

module.exports = {
    argv
}