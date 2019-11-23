const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);
const debug = require("debug")("app:");
const randomMessages = require("./controllers/randomMessages");

app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.json());

const car = require("./routes/car");
app.use(car);

/* Socket.io router */
io.on("connection", (socket) => {
    debug(`Socket connected`); 
    io.emit('Connected');
});

setInterval(() => {
        const data = randomMessages.randomMessagesHandler();
        io.emit('battery-temp-msg', data);
    }, 1000
);

module.exports = app;