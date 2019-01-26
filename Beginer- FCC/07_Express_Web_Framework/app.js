const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const host = 'localhost';

app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/example', (req, res) => {
    res.send('Hitting example route');
});

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + ' : ' + req.params.age);
});

app.listen(port, host, (err) =>{
    if(err){
        throw err;
    }

    console.log('Your server is runngin on http://' + host + ':' + port);
})