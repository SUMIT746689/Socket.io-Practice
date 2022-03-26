const express = require('express');
const app = express();
const http = require('http');

const server = http.Server(app);
const io = require('socket.io')(server);
global.io = io ;

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded());
app.set('view engine','ejs');



app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/',(req,res,next)=>{
    console.log(req.body);
    io.sockets.emit('broadcast',req.body.message)
    res.end();
})

// // console.log(global);
// io.emit("new_message", {
//     name : "mehedi",
// })

io.on('connection',socket=>{
    console.log(socket.id);
    
})

server.listen(4000,()=>{
    console.log(`Listening at ${process.env.APP_URL} PORT ...`)
})