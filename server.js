const express = require('express')
const app = express()
const io = require('socket.io').listen(3000)

io.on('connection', function(socket) {
  socket.on('sound', function(sound) {
    socket.broadcast.emit('hear', sound.type)
  })
})
