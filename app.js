const express = require('express');
const request = require('request');

const app = express();
const port = process.env.port || 3000;
const WEATHER_KEY = process.env.WEATHER_KEY;
const url = `http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${WEATHER_KEY}`;
// --env-file=.env

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/weather', (req, res) => {
    request(url, (err, response, body) => {
        if (err) {
            return res.status(404).send('Api request failed!')
        }
        const output = JSON.parse(body)
        res.send(output)
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server is running on ${port}`);
    }
});