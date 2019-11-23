const debug = require("debug")("http /newData")

const handleNewData = async (req, res) => {
    // handle data
    debug(`${req.body}`);
    res.status(200).send({message: "Received new data"});
};

module.exports = {
    handleNewData
};