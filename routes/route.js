const express = require('express');
const apiControllers = require('./../controllers/apiControllers');
const appConfig = require("./../config/appConfig");
const auth = require("./../middleware/authentication");

let setRoutes = (app) =>{

    let baseUrl = appConfig.apiVersion + '/eCommerce';

    app.get('/',apiControllers.hello);
    app.get(`${baseUrl}/:productType/list`, auth.isAuthenticated,apiControllers.listProducts);
    app.post(`${baseUrl}/:productType/create`,auth.isAuthenticated,apiControllers.createProduct);
    app.get(`${baseUrl}/:productType/:productId/veiw`,auth.isAuthenticated,apiControllers.veiwProduct);
    app.get(`${baseUrl}/:productType/:productName/veiwByName`,auth.isAuthenticated,apiControllers.viewProductByName);
    app.get(`${baseUrl}/:productType/:brand/veiwByBrand`,auth.isAuthenticated,apiControllers.viewByBrand);
    app.put(`${baseUrl}/:productType/:productId/edit`,auth.isAuthenticated,apiControllers.editProduct);
    app.put(`${baseUrl}/:productType/:productName/editByName`,auth.isAuthenticated,apiControllers.editProductByName);
    app.post(`${baseUrl}/:productType/:productId/delete`,auth.isAuthenticated,apiControllers.deleteProduct);
    app.post(`${baseUrl}/:productType/:productName/deleteByName`,auth.isAuthenticated,apiControllers.deleteProductByName);
}

module.exports = {
    setRoutes: setRoutes
};
