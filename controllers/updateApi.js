//const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const check = require('./../library/checkLib');
const response = require('./../library/responseLib');
const logger = require('./../library/customLogger');

//importing models here
const mobileModel = mongoose.model('Mobile');
const televisionModel = mongoose.model('Television');
const fashionModel = mongoose.model('Fashion');

let editProduct = (req, res) => {

    if (check.isEmpty(req.params.productId)) {

        console.log('productId should be passed')
        let apiResponse = response.generate(true, 'productId is missing', 403, null)
        res.send(apiResponse)
    }
    else if (check.isEmpty(req.params.productType)) {
        let apiResponse = response.generate(true, 'productType is missing', 403, null);
        res.send(apiResponse);
    }
    else {

        let options = req.body;
        console.log(options);

        if (req.params.productType === "Mobile") {
            mobileModel.update({ 'productId': req.params.productId }, options, { multi: true }).exec((err, result) => {

                if (err) {
                    logger.error(err.message, 'Products Edit Controller: editProductById', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Moile', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Products Edit Controller:editProductById', 5);
                    let apiResponse = response.generate(true, 'No Mobile found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product edited Successfully', 'Products Edit Controller:editProductById', 5);
                    let apiResponse = response.generate(false, 'Mobile Found & Edited', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Television") {
            televisionModel.update({ 'productId': req.params.productId }, options, { multi: true }).exec((err, result) => {

                if (err) {
                    logger.error(err.message, 'Products Edit Controller: editProductById', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Television', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Products Edit Controller:editProductById', 5);
                    let apiResponse = response.generate(true, 'No Television found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product edited Successfully', 'Products Edit Controller:editProductById', 5);
                    let apiResponse = response.generate(false, 'Television Found & Edited', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Fashion") {
            fashionModel.update({ 'productId': req.params.productId }, options, { multi: true }).exec((err, result) => {

                if (err) {
                    logger.error(err.message, 'Products Edit Controller: editProductById', 10);
                    let apiResponse = response.generate(true, 'Failed to find the fashion product', 500, err); bo
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Products Edit Controller:editProductById', 5);
                    let apiResponse = response.generate(true, 'No Fashion Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product edited Successfully', 'Products Edit Controller:editProductById', 5);
                    let apiResponse = response.generate(false, 'Fashion Product Found & Edited', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else {
            let apiresponse = response.generate(false, "No Such Product found so no edit ", 200, null);
            res.send(apiresponse);
        }


    }
}//end editProduct


let editProductByName = (req, res) => {

    if (check.isEmpty(req.params.productName)) {

        console.log('productName should be passed')
        let apiResponse = response.generate(true, 'productName is missing', 403, null)
        res.send(apiResponse)
    }
    else if (check.isEmpty(req.params.productType)) {
        let apiResponse = response.generate(true, 'productType is missing', 403, null);
        res.send(apiResponse);
    }
    else {

        let options = req.body;
        console.log(options);

        if (req.params.productType === "Mobile") {
            mobileModel.update({ 'name': req.params.productName }, options, { multi: true }).exec((err, result) => {

                if (err) {
                    logger.error(err.message, 'Products Edit Controller: editProductByName', 10);
                    let apiResponse = response.generate(true, 'Failed to find the mobile', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Mobile Found', 'Products Edit Controller:editProductByName', 5);
                    let apiResponse = response.generate(true, 'No Mobile found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Mobile edited Successfully', 'Products Edit Controller:editProductByName', 5);
                    let apiResponse = response.generate(false, 'Mobile Found & Edited', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Television") {
            televisionModel.update({ 'name': req.params.productName }, options, { multi: true }).exec((err, result) => {

                if (err) {
                    logger.error(err.message, 'Products Edit Controller: editProductByName', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Television', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Television Found', 'Products Edit Controller:editProductByName', 5);
                    let apiResponse = response.generate(true, 'No Television found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Television edited Successfully', 'Products Edit Controller:editProductByName', 5);
                    let apiResponse = response.generate(false, 'Television Found & Edited', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Fashion") {
            fashionModel.update({ 'name': req.params.productName }, options, { multi: true }).exec((err, result) => {

                if (err) {
                    logger.error(err.message, 'Products Edit Controller: editProductByName', 10);
                    let apiResponse = response.generate(true, 'Failed to find the fashion product', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Fashion Product Found', 'Products Edit Controller:editProductByName', 5);
                    let apiResponse = response.generate(true, 'No Fashion Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Fashion Product edited Successfully', 'Products Edit Controller:editProductByName', 5);
                    let apiResponse = response.generate(false, 'Fashion Product Found & Edited', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else {
            let apiresponse = response.generate(false, "No Such Product found so no edit ", 200, null);
            res.send(apiresponse);
        }


    }
}//end editProductByName

module.exports = {
    editProduct: editProduct,
    editProductByName: editProductByName,
};
