const express = require('express');
const apiControllers = require('./../controllers/apiControllers');
const appConfig = require("./../config/appConfig");
const auth = require("./../middleware/authentication");

let setRoutes = (app) =>{

    let baseUrl = appConfig.apiVersion + '/eCommerce';

    app.get('/',apiControllers.hello);
    app.get(`${baseUrl}/mobiles`, auth.isAuthenticated,apiControllers.listMobiles);
    app.post(`${baseUrl}/mobiles/create`,auth.isAuthenticated,apiControllers.createMobile);

}

module.exports = {
    setRoutes: setRoutes
};
