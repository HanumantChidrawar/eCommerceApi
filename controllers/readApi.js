//const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const check = require('./../library/checkLib');
const response = require('./../library/responseLib');
const logger = require('./../library/customLogger');

//importing blog model here
const mobileModel = mongoose.model('Mobile');
const televisionModel = mongoose.model('Television');
const fashionModel = mongoose.model('Fashion');



let listall = (req, res) => {

    let flag1, flag2, flag3 = false;
    let allProducts = [];

    let sendAll = () => {
        if (flag1  && flag2 && flag3) {
            let apiresponse = response.generate(false, "All Products found", 200, allProducts);
            res.send(apiresponse);
        }
    }

    mobileModel.find()
        .select('-__v -_d')
        .lean()
        .exec((err, result) => {

            if (err) {
                logger.error(err.message, 'MobilesController: list all Products', 10);
                let apiresponse = response.generate(true, 'Failed to get all mobiles', 500, null);
                res.send(apiresponse);
            } else if (check.isEmpty(result)) {
                flag1 = true;
                logger.info("No Mobile Found", "MobilesController: list all Products", 10);
                sendAll();
            } else {
                flag1 = true;
                logger.info("Mobiles found", "MobilesController: list all Products", 10);
                allProducts = allProducts.concat(result);
                console.log(flag1);
                sendAll();
            }
        });


    televisionModel.find()
        .select('-__v -_d')
        .lean()
        .exec((err, result) => {

            if (err) {
                logger.error(err.message, 'ProductsController: list all Televisions', 10);
                let apiresponse = response.generate(true, 'Failed to get all Products', 500, null);
                res.send(apiresponse);
            } else if (check.isEmpty(result)) {
                flag2 = true;
                logger.info("No TV Found", "ProductsController: list all Products", 10);
                sendAll();
            } else {
                flag2 = true;
                logger.info("TVs found", "ProductsController: list all Products", 10);
                allProducts = allProducts.concat(result);
                console.log(flag2);
                sendAll();
            }
        });

    fashionModel.find()
        .select('-__v -_d')
        .lean()
        .exec((err, result) => {

            if (err) {
                logger.error(err.message, 'ProductsController: list all Prdocuts', 10);
                let apiresponse = response.generate(true, 'Failed to get all Fashion wear', 500, null);
                res.send(apiresponse);
            } else if (check.isEmpty(result)) {
                flag3 = true;
                logger.info("No Fashion Wear Found", "ProductsController: list all Products", 10);
                sendAll();
            } else {
                flag3 = true;
                logger.info("Fashion wear found", "ProductssController: list all Products", 10);
                allProducts = allProducts.concat(result);
                console.log(flag3);
                sendAll();
            }
        });
}//end listall


let listProducts = (req, res) => {

    if (req.params.productType === "Mobiles") {

        mobileModel.find()
            .select('-__v -_d')
            .lean()
            .exec((err, result) => {

                if (err) {
                    logger.error(err.message, 'MobilesController: list all Mobiles', 10);
                    let apiresponse = response.generate(true, 'Failed to get all mobiles', 500, null);
                    res.send(apiresponse);
                } else if (check.isEmpty(result)) {
                    logger.info("No Mobile Found", "MobilesController: list all Mobiles", 10);
                    let apiresponse = response.generate(true, "No Mobile Found", 404, null);
                    res.send(apiresponse);
                } else {
                    logger.info("Mobiles found", "MobilesController: list all mobiles", 10);
                    let apiresponse = response.generate(false, "Mobiles found", 200, result);
                    res.send(apiresponse);
                }
            });
    } else if (req.params.productType === "Televisions") {

        televisionModel.find()
            .select('-__v -_d')
            .lean()
            .exec((err, result) => {

                if (err) {
                    logger.error(err.message, 'ProductsController: list all Televisions', 10);
                    let apiresponse = response.generate(true, 'Failed to get all televisions', 500, null);
                    res.send(apiresponse);
                } else if (check.isEmpty(result)) {
                    logger.info("No TV Found", "ProductsController: list all Televisions", 10);
                    let apiresponse = response.generate(true, "No Television Found", 404, null);
                    res.send(apiresponse);
                } else {
                    logger.info("TVs found", "ProductsController: list all Televisions", 10);
                    let apiresponse = response.generate(false, "Televisions found", 200, result);
                    res.send(apiresponse);
                }
            });
    } else if (req.params.productType === "Fashion") {

        fashionModel.find()
            .select('-__v -_d')
            .lean()
            .exec((err, result) => {

                if (err) {
                    logger.error(err.message, 'ProductsController: list all Fashion wear', 10);
                    let apiresponse = response.generate(true, 'Failed to get all Fashion wear', 500, null);
                    res.send(apiresponse);
                } else if (check.isEmpty(result)) {
                    logger.info("No Fashion Wear Found", "ProductsController: list all Fashion Wear", 10);
                    let apiresponse = response.generate(true, "No Fashion Wear Found", 404, null);
                    res.send(apiresponse);
                } else {
                    logger.info("Fashion wear found", "MobilesController: list all Fashion wear", 10);
                    let apiresponse = response.generate(false, "fashion wear found", 200, result);
                    res.send(apiresponse);
                }
            });
    } else {
        let apiresponse = response.generate(false, "No Such Fashion Product found", 200, null);
        res.send(apiresponse);
    }

}//end listProducts


let viewByProductId = (req, res) => {

    if (check.isEmpty(req.params.productId)) {
        let apiResponse = response.generate(true, 'productId is missing', 403, null);
        res.send(apiResponse);
    }
    else if (check.isEmpty(req.params.productType)) {
        let apiResponse = response.generate(true, 'productType is missing', 403, null);
        res.send(apiResponse);
    }
    else {

        if (req.params.productType === "Mobile") {
            mobileModel.findOne({ 'productId': req.params.productId }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Product View Controller: viewByProductId', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Mobile Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Mobile Found', 'Product View Controller:viewByProductId', 5);
                    let apiResponse = response.generate(true, 'No Mobile found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Mobile Found Successfully', 'Product View Controller:viewByProductId', 5);
                    let apiResponse = response.generate(false, 'Mobile Details Found', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Television") {
            televisionModel.findOne({ 'productId': req.params.productId }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Product View Controller: viewByProductId', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Television Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Television Found', 'Product View Controller:viewByProductId', 5);
                    let apiResponse = response.generate(true, 'No Television found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Television Found Successfully', 'Product View Controller:viewByProductId', 5);
                    let apiResponse = response.generate(false, 'Television Details Found', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Fashion") {
            fashionModel.findOne({ 'productId': req.params.productId }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Product View Controller: viewByProductId', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Fashion Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Fashion Product Found', 'Fashion Product View Controller:viewByProductId', 5);
                    let apiResponse = response.generate(true, 'No Fashion Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Fashion Product Found Successfully', 'Fashion Product View Controller:viewByProductId', 5);
                    let apiResponse = response.generate(false, 'Fashion Product Details Found', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else {
            let apiresponse = response.generate(false, "No Such Product found", 200, null);
            res.send(apiresponse);
        }


    }
}//end viewByProductId


let viewProductByName = (req, res) => {

    if (check.isEmpty(req.params.productName)) {
        let apiResponse = response.generate(true, 'productId is missing', 403, null);
        res.send(apiResponse);
    }
    else if (check.isEmpty(req.params.productType)) {
        let apiResponse = response.generate(true, 'productType is missing', 403, null);
        res.send(apiResponse);
    }
    else {

        if (req.params.productType === "Mobile") {
            mobileModel.findOne({ 'name': req.params.productName }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Product View Controller: viewProductByName', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Mobile Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Mobile Found', 'Product View Controller:viewProductByName', 5);
                    let apiResponse = response.generate(true, 'No Mobile found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Mobile Found Successfully', 'Product View Controller:viewProductByName', 5);
                    let apiResponse = response.generate(false, 'Mobile Details Found', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Television") {
            televisionModel.findOne({ 'name': req.params.productName }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Product View Controller: viewProductByName', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Television Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Television Found', 'Product View Controller:viewProductByName', 5);
                    let apiResponse = response.generate(true, 'No Television found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Television Found Successfully', 'Product View Controller:viewProductByName', 5);
                    let apiResponse = response.generate(false, 'Television Details Found', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Fashion") {
            fashionModel.findOne({ 'name': req.params.productName }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Product View Controller: viewProductByName', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Fashion Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Fashion Product Found', 'Product View Controller:viewProductByName', 5);
                    let apiResponse = response.generate(true, 'No Fashion Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Fashion Product Found Successfully', 'Fashion Product View Controller:viewProductByName', 5);
                    let apiResponse = response.generate(false, 'Fashion Product Details Found', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else {
            let apiresponse = response.generate(false, "No Such Product found", 200, null);
            res.send(apiresponse);
        }


    }
}//end viewProductByName

let viewByBrand = (req, res) => {

    if (check.isEmpty(req.params.brand)) {
        let apiResponse = response.generate(true, 'brand is missing', 403, null);
        res.send(apiResponse);
    }
    else if (check.isEmpty(req.params.productType)) {
        let apiResponse = response.generate(true, 'productType is missing', 403, null);
        res.send(apiResponse);
    }
    else {

        if (req.params.productType === "Mobile") {
            mobileModel.find({ 'brand': req.params.brand }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Product View Controller: viewByBrand', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Mobile Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Product View Controller:viewByBrand', 5);
                    let apiResponse = response.generate(true, 'No Mobile found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product Found Successfully', 'Product View Controller:viewByBrand', 5);
                    let apiResponse = response.generate(false, 'Mobile Details Found', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Television") {
            televisionModel.find({ 'brand': req.params.brand }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Product View Controller: viewByBrand', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Television Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Product View Controller:viewByBrand', 5);
                    let apiResponse = response.generate(true, 'No Television found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product Found Successfully', 'Product View Controller:viewByBrand', 5);
                    let apiResponse = response.generate(false, 'Television Details Found', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Fashion") {
            fashionModel.find({ 'brand': req.params.brand }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Product View Controller: viewByBrand', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Fashion Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Product View Controller:viewByBrand', 5);
                    let apiResponse = response.generate(true, 'No Fashion Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product Found Successfully', 'Product View Controller:viewByBrand', 5);
                    let apiResponse = response.generate(false, 'Fashion Product Details Found', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else {
            let apiresponse = response.generate(false, "No Such Product found", 200, null);
            res.send(apiresponse);
        }


    }
}//end viewByBrand

module.exports = {
    listall: listall,
    listProducts: listProducts,
    veiwProduct: viewByProductId,
    viewProductByName: viewProductByName,
    viewByBrand: viewByBrand,
};
