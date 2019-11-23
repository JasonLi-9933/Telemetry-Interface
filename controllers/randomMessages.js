function parseData(rawData) {
    const data = {};

    if (rawData['id'] === 0x627) {
        const aveTemp = rawData['data'][0];
        const maxTemp = rawData['data'][4];
        const minTemp = rawData['data'][2];
        const timestamp = rawData['timestamp'];
    
        const data = {
            "msg-id": 0x627,
            "msg-source": "bms",
            "timestamp": timestamp,
            "data": {
                "ave-batt-temp": aveTemp,
                "max-batt-temp": maxTemp,
                "min-batt-temp": minTemp,
            }
        }
        return data;
    }
}

function generateRawData() {
    const aveTemp = Math.floor(Math.random() * 100);
    const maxTemp = Math.floor(Math.random() * 100);
    const minTemp = Math.floor(Math.random() * 100);

    const rawData = {
        "id": 0x627,
        "data": [ (aveTemp & 0xFF), 0x00, (minTemp & 0xFF), 0x03, (maxTemp & 0xFF), 0x05, 0x06, 0x07],
        "len": 8,
        "timestamp": new Date().getTime() 
    }
    return rawData;
}

function randomMessagesHandler() {
    const rawData = generateRawData();
    const data = parseData(rawData);
    return data;
}

module.exports = {
    randomMessagesHandler
};