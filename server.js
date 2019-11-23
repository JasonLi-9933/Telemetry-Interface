/* 
 * Starts connections
 *
 */ 

const app = require("./app.js");
const debug = require("debug")("server:")

const hostname = "127.0.0.1";
const port = 3000;

app.listen(port, () => {
    debug(`Server listening on port ${port}!`);
});
