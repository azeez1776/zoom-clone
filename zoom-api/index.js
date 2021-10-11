const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World')
});

io.on("connection", socket => {
    console.log('Someone connected');
    socket.on('join-room', (roomID, userName) => {
        console.log('User joined room');
        console.log(roomID);
        console.log(userName);
    })
})


server.listen(port, () => {
    console.log(`Listening to port ${port}`)
})