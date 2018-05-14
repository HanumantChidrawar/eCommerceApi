//importing expressjs
const express = require('express');
const appConfig = require('./config/appConfig');
const http = require('http');
const fs = require('fs');
const mongoose = require('mongoose');

//importing the body-parser for fetching 
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//middlewares
const helmet = require('helmet');
const logger = require('./library/customLogger');
const globalErrorHandler = require('./middleware/globalErrorHandler');
const routeLogger = require('./middleware/routeLogger');

//Instantiating the App
const app = express();


//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(helmet());

app.use(globalErrorHandler.errorHandler);
app.use(routeLogger.logIp);

//Bootstrap models
let modelsPath = './model';
fs.readdirSync(modelsPath).forEach((file)=>{
    if(~file.indexOf('.js')){
        require(modelsPath + '/' +file);
    }
});
//end bootstrap model

//Bootstrap route
let routesPath = './routes';
fs.readdirSync(routesPath).forEach( function (file){

    if(~file.indexOf('.js')){
        console.log("including the following file");
        console.log(routesPath + '/' +file);
        let route = require(routesPath+ '/'+file);
        route.setRoutes(app);
    }

});//end Bootstrap route


app.use(globalErrorHandler.notFoundHandler);

//creating http Server
const server = http.createServer(app);

//start listening to the http server

server.listen(appConfig.port);
server.on('error',onError);
server.on('listening',onListening);

//end server listening code

//event listener for Http server error event

function onError(error){
    if(error.syscall !== 'listen'){
        logger.error(error.code+" not equal listen","serverOnErrorHandler",10)
        throw error;
    }

    //handle specific listen error
    switch(error.code){
        case 'EACCES':
            logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10)
            process.exit(1)
            break;
        case 'EADDRINUSE':
            logger.error(error.code + ':port is already in use.', 'serverOnErrorHandler', 10)
            process.exit(1)
            break;
        default:
            logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10)
            throw error
    }
}

function onListening(){
    var addr = server.address();
    var bind = typeof addr === 'string'
     ?'pipe' +addr
     : 'port' +addr.port;
     ("Listening on "+bind);
     logger.info('Server listening on port'+addr.port, 'serverOnListeningHandler',10);
     let db = mongoose.connect(appConfig.db.uri);
}

process.on("unhandledRejection", (reason, p) =>{
    logger.error('Unhandled Rejection at: Promise',p,"reason:",reason);
     // application specific logging, throwing an error, or other logic here
});

//handling mongoose connection error
mongoose.connection.on('error', (err) => {
    console.log('Database connection error');
    console.log(err);
});//end mongoose connection error

//handling mongoose success event
mongoose.connection.on('open', (err) => {

    if (err) {
        console.log("Database Error");
        console.log(err);
    } else {
        console.log("Database connection open Success");
    }
});//end mongoose connection open handler
