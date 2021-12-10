const lugar = require("./lugar/lugar")
const clima = require("./clima/clima")

const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Direccion de la ciudad para obtener el clima",
        demand: true
    }
}).argv;

const getInfo = async (direccion) => {
    try {
        let coord = await lugar.getLatlng(direccion);
        let temp = await clima.getClima(coord.lat, coord.lon)

        return console.log(`El clima de ${coord.direccion} es de ${temp}°C`);
    }catch (err){
        return console.log(`No se pudo determinar el clima de ${direccion}`);
    }

}

getInfo(argv.direccion)