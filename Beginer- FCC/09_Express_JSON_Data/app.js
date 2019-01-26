const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000
const host = 'localhost';

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);
    // database work here

    res.json({success : true});
});

app.listen(port, host, (err) => {
    if(err) throw err;

    console.log('Your server is running on http://' + host + ':' + port);
})
