const debug = require("debug")("interface:");

const Interface = (app, socket) => {
    this.app = app;
    this.socket = socket;

    this.handler = {
        random: random.bind(this)
    };
};

setInterval(() => {
        debug(`Emitting to interface`);
        random();
    }, 1000);

function random() {
    const rawData = generateRawData();
    const data = parseData(rawData);
    this.socket.emit('battery-temp-msg', data);
}

function parseData(rawData) {
    var data = {};

    if (rawData['id'] === 0x627) {
        var aveTemp = rawData['data'][0];
        var maxTemp = rawData['data'][4];
        var minTemp = rawData['data'][2];
        var timestamp = rawData['timestamp'];
    
        var data = {
            "msg-id": 0x627,
            "msg-source": "bms",
            "timestamp": timestamp,
            "data": {
                "ave-batt-temp": aveTemp,
                "max-batt-temp": maxTemp,
                "min-batt-temp": minTemp,
            }
        };
        return data;
    }
}

function generateRawData() {
    var aveTemp = Math.floor(Math.random() * 100);
    var maxTemp = Math.floor(Math.random() * 100);
    var minTemp = Math.floor(Math.random() * 100);

    var rawData = {
        "id": 0x627,
        "data": [ (aveTemp & 0xFF), 0x00, (minTemp & 0xFF), 0x03, (maxTemp & 0xFF), 0x05, 0x06, 0x07],
        "len": 8,
        "timestamp": new Date().getTime() 
    };

    console.log("raw data generated");

    return rawData;

}

module.exports = Interface;