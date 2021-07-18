const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const api = require('./server/api');


app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(`${__dirname}/public`)));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect('mongodb://localhost/TortugaPedasi', { useUnifiedTopology: true , useNewUrlParser: true });


app.use("/", api);


const port = 8080;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});