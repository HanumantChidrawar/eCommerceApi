const express = require('express');
const apiControllers = require('./../controllers/apiControllers');
const appConfig = require("./../config/appConfig");
const auth = require("./../middleware/authentication");

let setRoutes = (app) =>{

    let baseUrl = appConfig.apiVersion + '/eCommerce';

    app.get('/',apiControllers.hello);
    app.get(`${baseUrl}/:productType/list`, auth.isAuthenticated,apiControllers.listProducts);
    app.post(`${baseUrl}/:productType/create`,auth.isAuthenticated,apiControllers.createProduct);
    app.get(`${baseUrl}/:productId/veiw`,auth.isAuthenticated,apiControllers.veiwProduct);

}

module.exports = {
    setRoutes: setRoutes
};
