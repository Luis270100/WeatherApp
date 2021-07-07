const express = require('express');
const request = require('request');
const router = express.Router();
const City = require('../models/City');

router.get("/cities/:cityName", (req, res) => {
    let cityName = req.params.cityName;
    request(`http://api.weatherstack.com/current?access_key=4bd20a8118ac3089bc546d81428013a1&query=${cityName}`, (err, response, body) => {
        let reqBody = JSON.parse(body)
        // console.log(reqBody)
        let cityWeather = {
        name: reqBody.location.name,
        temperature: reqBody.current.temperature,
        condition: reqBody.current.weather_descriptions[0],
        conditionPic: reqBody.current.weather_icons[0]
        }
        res.send(cityWeather)
    });
});


router.get('/cities', (req, res) => {
    City.find({}).exec((err, city) => {
      res.send(city)
    })
});



module.exports = router;