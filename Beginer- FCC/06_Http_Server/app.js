const http = require('http');
const fs = require('fs')

const express = require('express');
const app = express();
const port = 3000
const host = 'localhost'

app.get('/html', (req, res) => {
    const readStream = fs.createReadStream('./static/example.html');
    res.writeHead(200, {'Content-type' : 'text/html'});
    readStream.pipe(res);
});

app.get('/json', (req, res) => {
    const readStream = fs.createReadStream('./static/example.json');
    res.writeHead(200, {'Content-type' : 'application/json'});
    readStream.pipe(res);
});

app.get('/image', (req, res) => {
    const readStream = fs.createReadStream('./static/example.png');
    res.writeHead(200, {'Content-type' : 'image/png'});
    readStream.pipe(res);
});

app.get('/', (req, res) => {
    res.send({
        "staus" : "OK", 
        "message" : "Server is running"
    });
});

app.listen(port, host, (err) =>{
    if(err){
        throw err;
    } 

    console.log('Your server is running on http://' + host + ':' + port);
});
