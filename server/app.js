// import files and packages up here
const morgan =require('morgan');
const express = require('express');
const PORT = process.env.PORT || 3000;
var data = require('./data.json');

// create your express server below
var app = express();
app.use(morgan('dev'));

app.get('/',function(req,res){
    res.status(200).send('Express Server');
});

// add your routes and middleware below
const router = express.Router();
app.use('/', router);

router
    .route('/data')
    .get(function(req, res){
        res.json(data)
    });



// finally export the express application
module.exports = app;
