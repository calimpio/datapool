require('module-alias/register')   
const express = require("express");
const app = express();
const utils = require('@config/app');

//Middlewars:


//API Middlewars:
app.use('/api/:key',(req,res,next)=>{    
     if(req.params.key !== utils.config.public_api_key)return res.status(404).send();
     
     
     next();
});

//APP routers:

const apiRouter = require('./routers/api');
app.use('/api/:key',apiRouter);

//app routes:



module.exports = app;