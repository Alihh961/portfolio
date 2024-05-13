const express = require('express');

const dotenv = require('dotenv');
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, './public');


dotenv.config({path: './config.env'}); // it must before the declaration of app
app.set('view engine', 'ejs');


app.use(express.json()); //to add the request body sent of the api to the request body
app.use(express.static(publicPath)); // to have the access to static files in the browser
app.use(express.urlencoded({extended: true})); // to receive data using post method

app.get('/' , (req , res )=>{
    res.render('home');
});



module.exports = app;
