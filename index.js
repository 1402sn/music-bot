
const MainClient = require("./disspace");
const client = new MainClient();
const keepAliveServer = require('./keep_alive.js');


client.connect()

module.exports = client; 
