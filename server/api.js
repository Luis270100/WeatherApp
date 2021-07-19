const express = require('express');
const request = require('request');
const router = express.Router();
const City = require('../models/City');



router.get("/city/:cityName", (req, res) => {
    let cityName = req.params.cityName;
    request(`http://api.weatherstack.com/current?access_key=3e7f7250ddf27add387516d99bed0d21&query=${cityName}`, (err, response, body) => {
        let reqBody = JSON.parse(body);
        if(reqBody.error){
            console.log(body.error);
            return res.send(null);
        };

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
      res.send(city);
    })
});


router.post('/city', (req, res) => {
    let city = new City(req.body);
    city.save()
    .then(doc => {
        console.log(`City save on the DB ${doc}`);
        res.send(true);
    });
});


router.delete('/city/:cityName', (req, res) => {
    let cityName = req.params.cityName
    City.findOneAndRemove({
      name: cityName
    })
    .then(() => {
        res.send(true);
    });
});


module.exports = router;