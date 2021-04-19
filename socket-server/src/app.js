const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const rooms = {};

app.get('/', (req, res)=> res.send("hey there"));

//Esto es un event listener, primero es el nombre del evento el segundo es
//un callback
io.on('connection', (socket)=>{
    console.log('usuario conectado');
    socket.on('message', (msg)=>{
        console.log(msg);
        socket.broadcast.emit('message-broadcast', msg);
    });
});

http.listen(3000, ()=>{
    console.log("Escuchando en puerto *:3000");
});