const express = require('express')
const connect = require('../database/connection')

//routes imports
const contactRouter = require('../routes/contacts.routes')

class Server {
  constructor() {
    this.app = express()
    this.middlewares();
    this.routes()
  }

  //all routes
  routes() {
    this.app.use('/api/contacts', contactRouter)
  }

  //middlewares
  middlewares() {
    this.app.use(express.json())
  }

  //start the servers
  async start() {
    try {
      await connect(process.env.MONGO_URI)

      const PORT = process.env.PORT || 5000
      this.app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}`)
      })
    } catch (error) {
      console.log('ocurred an error connecting to the database')
    }
  }
}

module.exports = Server
