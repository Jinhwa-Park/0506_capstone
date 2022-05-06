
import express from 'express'
import http from 'http'

import config from './config'
import configure from './configure'

class Server {
  constructor() {
    this.http = http
    this.port = config.serverPort
    this.app = null
    this.server = null
  }

  async initialize() {
    this.app = express()

    this.server = http.createServer(this.app)

    await configure(this.app)
  }

  listen() {
    return new Promise((resolve) => this.server.listen(this.port, '0.0.0.0', () => resolve(this)))
  }
}

async function runServer() {
  const server = new Server()
  await server.initialize()
  return server.listen()
}

runServer().then((server) => console.log(`Alyac Server Ready : ${server.port}`))
