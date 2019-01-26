const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const joi = require('joi');

const app = express();
const port = 3000
const host = 'localhost';

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    // console.log(req.body);
    const schema = joi.object().keys({
        email : joi.string().trim().email().required(),
        password : joi.string().min(5).max(10).required()
    });

    joi.validate(req.body, schema, (err, result) => {
        if(err) {
            console.log(err);
            res.send('an error has occurred');
        }
        
        // database work here

        console.log(result);
        res.send('successfully posted data');
    });
});

app.listen(port, host, (err) => {
    if(err) throw err;

    console.log('Your server is running on http://' + host + ':' + port);
})
