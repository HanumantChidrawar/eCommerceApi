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


let helloWorld = (req, res) => {
    res.send("Hello World");
}


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
                    let apiresponse = response.generate(true, 'Failed to get all mobiles', 500, null);
                    res.send(apiresponse);
                } else if (check.isEmpty(result)) {
                    logger.info("No TV Found", "ProductsController: list all Televisions", 10);
                    let apiresponse = response.generate(true, "No Mobile Found", 404, null);
                    res.send(apiresponse);
                } else {
                    logger.info("TVs found", "ProductsController: list all Televisions", 10);
                    let apiresponse = response.generate(false, "Mobiles found", 200, result);
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
        let apiresponse = response.generate(false, "No Such Product found", 200, null);
        res.send(apiresponse);
    }

}//end listMobiles

let createProduct = (req, res) => {

    let id = shortid.generate();

    if (req.params.productType === "Mobile") {

        let newMobile = new mobileModel({

            productId: id,
            category: "Mobile",
            brand: req.body.brand,
            name: req.body.name,
            modelNumber: req.body.modelNumber,
            productModelName: req.body.modelName,
            color: req.body.color,
            browseType: req.body.browseType,
            hybridSlimSlot: req.body.hybridSlimSlot,
            touchScreen: req.body.touchScreen,
            otgCompatible: req.body.otgCompatible,
            quickCharging: req.body.quickCharging,
            warranty: req.body.warranty,
            operatingSystem: req.body.operatingSystem,
            processorCore: req.body.processorCore,
            clockSpeed: req.body.clockSpeed,
            internalStorage: req.body.internalStorage,
            RAM: req.body.RAM,
            memoryCardSlotType: req.body.memoryCardSlotType,
            displaySize: req.body.displaySize,
            resolution: req.body.resolution,
            resolutionType: req.body.resolutionType,
            primaryCamera: req.body.primaryCamera,
            secondaryCamera: req.body.secondaryCamera,
            battery: req.body.secondaryCamera,
            price: req.body.price

        });//end mobileModel

        let images = (req.body.images != undefined && req.body.images != "" && req.body.images != null) ? req.body.images.split(',') : [];
        newMobile.images = images;

        let inTheBox = (req.body.inTheBox != undefined && req.body.inTheBox != "" && req.body.inTheBox != null) ? req.body.inTheBox.split(',') : [];
        newMobile.inTheBox = inTheBox;

        newMobile.save((err, result) => {

            if (err) {
                logger.error(err.message, "apiControllers: createProductController", 10);
                let apiResponse = response.generate(true, "Failed to create mobile.", 500, null);
                res.send(apiResponse);
            }
            else {
                logger.info("Mobile added successfully", "apiControllers: createProductController", 10);
                let apiResponse = response.generate(false, "Mobile added successfully", 200, result);
                res.send(apiResponse);
            }
        });//end newMobile save()


    } else if (req.params.productType === "Television") {

        let newTelevision = new televisionModel({

            productId: id,
            category: "Television",
            brand: req.body.brand,
            name: req.body.name,
            modelNumber: req.body.modelNumber,
            productModelName: req.body.modelName,
            color: req.body.color,
            displaySize: req.body.displaySize,
            screenType: req.body.screenType,
            resolution: req.body.resolution,
            smartTv: req.body.smartTv,
            HDMI: req.body.HDMI,
            USB: req.body.USB,
            operatingSystem: req.body.operatingSystem,
            launchYear: req.body.launchYear,
            processor: req.body.processor,
            weight: req.body.weight,
            dimensions: req.body.dimensions,
            price: req.body.price

        });//end televisionModel

        let images = (req.body.images != undefined && req.body.images != "" && req.body.images != null) ? req.body.images.split(',') : [];
        newTelevision.images = images;

        let inTheBox = (req.body.inTheBox != undefined && req.body.inTheBox != "" && req.body.inTheBox != null) ? req.body.inTheBox.split(',') : [];
        newTelevision.inTheBox = inTheBox;

        newTelevision.save((err, result) => {

            if (err) {
                logger.error(err.message, "apiControllers: createProductController", 10);
                let apiResponse = response.generate(true, "Failed to create TV.", 500, null);
                res.send(apiResponse);
            }
            else {
                logger.info("TV added successfully", "apiControllers: createProductController", 10);
                let apiResponse = response.generate(false, "Television added successfully", 200, result);
                res.send(apiResponse);
            }
        });//end newTelevision save()


    } else if (req.params.productType === "Fashion") {

        let newFashion = new fashionModel({
            productId: id,
            category: "Fashion",
            subCategory: req.body.subCategory,
            brand: req.body.brand,
            name: req.body.name,
            idealFor: req.body.idealFor,
            suitableFor: req.body.suitableFor,
            pattern: req.body.pattern,
            faded: req.body.faded,
            fabric: req.body.fabric,
            rise: req.body.rise,
            size: req.body.size,
            reversible: req.body.reversible,
            color: req.body.color,
            price: req.body.price

        });//end fashionModel

        let images = (req.body.images != undefined && req.body.images != "" && req.body.images != null) ? req.body.images.split(',') : [];
        newFashion.images = images;

        newFashion.save((err, result) => {

            if (err) {
                logger.error(err.message, "apiControllers: createProductController", 10);
                let apiResponse = response.generate(true, "Failed to create Fashion.", 500, null);
                res.send(apiResponse);
            }
            else {
                logger.info("Fashion added successfully", "apiControllers: createProductController", 10);
                let apiResponse = response.generate(false, "Fashion added successfully", 200, result);
                res.send(apiResponse);
            }
        });//end newFashion save()

    } else {
        let apiResponse = response.generate(false, "Could not create product "+req.params.productType +" as product Model is not defined", 200, null);
                res.send(apiResponse);
    }


}//end createProduct

let viewByProductId = (req, res) => {

    if (check.isEmpty(req.params.productId)) {
        let apiResponse = response.generate(true, 'productId is missing', 403, null);
        res.send(apiResponse);
    }
    else {

        mobileModel.findOne({ 'productId': req.params.productId }, (err, result) => {

            if (err) {
                logger.error(err.message, 'Product View Controller: viewByProductId', 10);
                let apiResponse = response.generate(true, 'Failed to find the Product Details', 500, err);
                res.send(apiResponse);
            } else if (check.isEmpty(result)) {
                logger.info('No Product Found', 'Product View Controller:viewProductById', 5);
                let apiResponse = response.generate(true, 'No Product found', 404, null);
                res.send(apiResponse);
            } else {
                logger.info('Product Found Successfully', 'Product View Controller:viewByProductId', 5);
                let apiResponse = response.generate(false, 'Product Details Found', 200, result);
                res.send(apiResponse);
            }

        });
    }
}//end viewByProductId

module.exports = {
    hello: helloWorld,
    listProducts: listProducts,
    createProduct: createProduct,
    veiwProduct: viewByProductId
};
