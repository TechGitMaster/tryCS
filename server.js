const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use((req, res, next) => {

     // Website you wish to allow to connect
     res.setHeader('Access-Control-Allow-Origin', '*');

     // Request methods you wish to allow
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
     // Request headers you wish to allow
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
     // Set to true if you need the website to include cookies in the requests sent
     // to the API (e.g. in case you use sessions)
     res.setHeader('Access-Control-Allow-Credentials', true);
 
     // Pass to next layer of middleware
     next();
});

//Your server
app.use('/', require('./servFile/expSe.js'));


app.use(express.static('./dist/Postvogue'));
app.get('*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/Postvogue/'}),
);

var server = require('http').createServer(app);

const io = require('socket.io')(server, {transports: ['websocket']});

const livedata = io.of('/livedata');

livedata.on('connect', (socket) => {
    socket.emit('message', 'CONNNNSAKJDHSAKJDH');
});

server.listen((process.env.POST || 8080), () => console.log('--Connection is successful--'));