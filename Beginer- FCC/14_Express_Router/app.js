const express = require('express');
const path = require('path');
const app = express();

const port = 3000
const host = 'localhost';

app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Rounting');
});

const people = require('./routers/people');

app.use('/people', people);

app.listen(port, host, (err) => {
    if(err) {
        throw err;
    }

    console.log('Your server is running on http://' + host + ':' + port);
}) 