const express = require('express');
const apiControllers = require('./../controllers/apiControllers');
const appConfig = require("./../config/appConfig");

let setRoutes = (app) =>{

    let baseUrl = appConfig.apiVersion + '/eCommerce';

    app.get('/',apiControllers.hello);


}

module.exports = {
    setRoutes: setRoutes
};
