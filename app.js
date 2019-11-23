const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);
const debug = require("debug")("app:");

const Interface = require("./events/interface")

app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.json());

const car = require("./routes/car");
app.use(car);

/* Socket.io router */
io.on("connection", (socket) => {
    debug(`Socket connected`);

    const eventHandlers = {
        interface: new Interface(app, socket)
    };  
    for (const category in eventHandlers) {
        const handler = eventHandlers[category].handler;
        for (const event in handler) {
            socket.on(event, handler[event]);
        }
    }
});

module.exports = app;