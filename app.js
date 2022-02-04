const Server = require('./models/server')

require('dotenv').config()

//enable json parsed


const server = new Server()
server.start();

//starting the server
