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


let deleteProduct = (req, res) => {

    if (check.isEmpty(req.params.productId)) {

        console.log('productId should be passed')
        let apiResponse = response.generate(true, 'productId is missing', 403, null)
        res.send(apiResponse)
    } else if (check.isEmpty(req.params.productType)) {
        let apiResponse = response.generate(true, 'productType is missing', 403, null);
        res.send(apiResponse);
    }
    else {


        if (req.params.productType === "Mobile") {
            mobileModel.deleteOne({ 'productId': req.params.productId }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'DeleteApi Controller: deleteProduct', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Mobile Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Mobile Found', 'DeleteApi Controller:deleteProduct', 5);
                    let apiResponse = response.generate(true, 'No Mobile found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Mobile deleted Successfully', 'DeleteApi Controller:deleteProduct', 5);
                    let apiResponse = response.generate(false, 'Mobile Found & Deleted', 200, result);
                    res.send(apiResponse);
                }

            });
        } else if (req.params.productType === "Television") {
            televisionModel.deleteOne({ 'productId': req.params.productId }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'DeleteApi Controller: deleteProduct', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Fashion Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Television Found', 'DeleteApi Controller:deleteProduct', 5);
                    let apiResponse = response.generate(true, 'No Television found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Television deleted Successfully', 'DeleteApi Controller:deleteProduct', 5);
                    let apiResponse = response.generate(false, 'Television Found & Deleted', 200, result);
                    res.send(apiResponse);
                }

            });

        } else if (req.params.productType === "Fashion") {
            fashionModel.deleteOne({ 'productId': req.params.productId }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'DeleteApi Controller: deleteProduct', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Fashion Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Fashion Product Found', 'DeleteApi Controller:deleteProduct', 5);
                    let apiResponse = response.generate(true, 'No Fashion Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Fashion Product deleted Successfully', 'DeleteApi Controller:deleteProduct', 5);
                    let apiResponse = response.generate(false, 'Fashion Product Found & Deleted', 200, result);
                    res.send(apiResponse);
                }

            });

        } else {
            let apiresponse = response.generate(false, "No Such Product found so no edit ", 200, null);
            res.send(apiresponse);
        }

    }
}//end deleteProduct

let deleteProductByName = (req, res) => {

    if (check.isEmpty(req.params.productName)) {

        console.log('productName should be passed')
        let apiResponse = response.generate(true, 'productName is missing', 403, null)
        res.send(apiResponse)
    } else if (check.isEmpty(req.params.productType)) {
        let apiResponse = response.generate(true, 'productType is missing', 403, null);
        res.send(apiResponse);
    }
    else {


        if (req.params.productType === "Mobile") {
            mobileModel.deleteOne({ 'name': req.params.productName }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'DeleteApi Controller: deleteProduct', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Mobile Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Mobile Found', 'DeleteApi Controller:deleteProduct', 5);
                    let apiResponse = response.generate(true, 'No Mobile found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Mobile deleted Successfully', 'DeleteApi Controller:deleteProduct', 5);
                    let apiResponse = response.generate(false, 'Mobile Found & Deleted', 200, result);
                    res.send(apiResponse);
                }

            });
        } else if (req.params.productType === "Television") {
            televisionModel.deleteOne({ 'name': req.params.productName }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'DeleteApi Controller: deleteProduct', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Fashion Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Television Found', 'DeleteApi Controller:deleteProduct', 5);
                    let apiResponse = response.generate(true, 'No Television found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Television deleted Successfully', 'DeleteApi Controller:deleteProduct', 5);
                    let apiResponse = response.generate(false, 'Television Found & Deleted', 200, result);
                    res.send(apiResponse);
                }

            });

        } else if (req.params.productType === "Fashion") {
            fashionModel.deleteOne({ 'name': req.params.productName }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'DeleteApi Controller: deleteProduct', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Fashion Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Fashion Product Found', 'DeleteApi Controller:deleteProduct', 5);
                    let apiResponse = response.generate(true, 'No Fashion Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Fashion Product deleted Successfully', 'DeleteApi Controller:deleteProduct', 5);
                    let apiResponse = response.generate(false, 'Fashion Product Found & Deleted', 200, result);
                    res.send(apiResponse);
                }

            });

        } else {
            let apiresponse = response.generate(false, "No Such Product found so no edit ", 200, null);
            res.send(apiresponse);
        }

    }
}//end deleteProductByName

module.exports = {
    
    deleteProduct: deleteProduct,
    deleteProductByName: deleteProductByName

};
