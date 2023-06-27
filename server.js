const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const socketio = require('socket.io')
const io = socketio(server)

const PORT = process.env.PORT || 8080

app.use(express.static('./public'))



server.listen(PORT, () => console.log(`Live on port ${PORT}`))