const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3001;

const users = [];

const addUser = (userName, roomID) => {
    users.push({
        userName,
        roomID
    })
}

const getUsers = (roomID) => {
    return users.filter(user => (user.roomID == roomID))
}

app.get('/', (req, res) => {
    res.send('Hello World')
});

io.on("connection", socket => {
    console.log('Someone connected');
    socket.on('join-room', (roomID, userName) => {
        console.log('User joined room');
        console.log(roomID);
        console.log(userName);
        socket.join(roomID);
        addUser(userName, roomID)
        socket.to(roomID).emit('user-connected', userName)

        io.to(roomID).emit('all-users', getUsers(roomID))
    })
})


server.listen(port, () => {
    console.log(`Listening to port ${port}`)
})