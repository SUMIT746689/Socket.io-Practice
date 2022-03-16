const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


io.emit("new_message", {
    name : "mehedi",
})

require('dotenv').config();

app.use(express.json());
app.set('view engine','ejs');



app.get('/',(req,res)=>{
    res.render('index')
})
// io.on('connection',socket=>{
//     console.log(socket.id)
// })

app.listen(4000,()=>{
    console.log(`Listening at ${process.env.APP_URL} PORT ...`)
})