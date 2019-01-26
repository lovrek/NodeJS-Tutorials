const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const host = 'localhost';
const port = 3000

app.use(bodyparser.json());
app.use((req, res, next) => {
    console.log(req.url, req.method);
    req.banana = 'banana'
    next();
});

app.get('/', (req, res) => {
    console.log(req.banana);
    res.send('MiddleWare');
});

app.listen(port, host, (err) => {
    if(err) {
        throw err;
    }

    console.log('Your server is running on http://' + host + ':' + port);
})

