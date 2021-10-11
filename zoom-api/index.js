const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World')
})


server.listen(port => {
    console.log(`Listening to port ${port}`)
})