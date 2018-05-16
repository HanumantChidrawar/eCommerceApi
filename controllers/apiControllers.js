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
const cartModel = mongoose.model('cart');

let myCart = new cartModel();

let helloWorld = (req, res) => {
    res.send("Hello World");
}

let addToCart = (req, res) => {
    if (check.isEmpty(req.body.productName)) {
        let apiResponse = response.generate(true, 'productName is missing cannot add to cart', 403, null);
        res.send(apiResponse);
    }
    else if (check.isEmpty(req.body.productType)) {
        let apiResponse = response.generate(true, 'productType is missing cannot add to cart', 403, null);
        res.send(apiResponse);
    }
    else {
        if (req.body.productType === "Mobile") {

            mobileModel.findOne({ 'name': req.params.productName }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Cart Add Controller: addToCart', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Mobile', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Mobile Found', 'Cart Add Controller: addToCart', 5);
                    let apiResponse = response.generate(true, 'No Mobile found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Mobile added to cart Successfully', 'Cart Add Controller: addToCart', 5);
                    myCart.items.push(result);
                    myCart.save((err, result) => {

                        if (err) {
                            logger.error(err.message, "Cart Add Controllers: addToCart", 10);
                            let apiResponse = response.generate(true, "Failed to add mobile to cart.", 500, null);
                            res.send(apiResponse);
                        }
                        else {
                            logger.info("Mobile added successfully", "Cart Add Controllers: addToCart", 10);
                            let apiResponse = response.generate(false, "Mobile added to cart successfully", 200, result);
                            res.send(apiResponse);
                        }
                    });//end myCart save()
                }
            });
        }
        else if (req.body.productType === "Television") {

            televisionModel.findOne({ 'name': req.params.productName }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Cart Add Controller: addToCart', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Television', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Television Found', 'Cart Add Controller: addToCart', 5);
                    let apiResponse = response.generate(true, 'No Television found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Television added to cart Successfully', 'Cart Add Controller: addToCart', 5);
                    myCart.items.push(result);
                    myCart.save((err, result) => {

                        if (err) {
                            logger.error(err.message, "Cart Add Controllers: addToCart", 10);
                            let apiResponse = response.generate(true, "Failed to add television to cart.", 500, null);
                            res.send(apiResponse);
                        }
                        else {
                            logger.info("Mobile added successfully", "Cart Add Controllers: addToCart", 10);
                            let apiResponse = response.generate(false, "Television added to cart successfully", 200, result);
                            res.send(apiResponse);
                        }
                    });//end myCart save()
                }

            });
        }
        else if (req.body.params === "Fashion") {

            fashionModel.findOne({ 'name': req.params.productName }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Cart Add Controller: addToCart', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Fashion Product', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No such Fashion Product Found', 'Cart Add Controller: addToCart', 5);
                    let apiResponse = response.generate(true, 'No fashion such product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Fashion Product added to cart Successfully', 'Cart Add Controller: addToCart', 5);
                    myCart.items.push(result);
                    myCart.save((err, result) => {

                        if (err) {
                            logger.error(err.message, "Cart Add Controllers: addToCart", 10);
                            let apiResponse = response.generate(true, "Failed to add fashion product to cart.", 500, null);
                            res.send(apiResponse);
                        }
                        else {
                            logger.info("Fashion Product added successfully", "Cart Add Controllers: addToCart", 10);
                            let apiResponse = response.generate(false, "Fashion Product added to cart successfully", 200, result);
                            res.send(apiResponse);
                        }
                    });//end myCart save()
                }

            });
        }
        else {
            let apiresponse = response.generate(false, "No Such Product found", 200, null);
            res.send(apiresponse);
        }
    }
};//end addToCart()

let removeFromCart = (req, res) => {
    if (check.isEmpty(req.body.productName)) {
        let apiResponse = response.generate(true, 'productName is cannot remove from cart', 403, null);
        res.send(apiResponse);
    }
    else {
        mobileModel.find()
            .select('-__v -_d')
            .lean()
            .exec((err, result) => {

                if (err) {
                    logger.error(err.message, 'Cart Remove Controller: removeFromCart', 10);
                    let apiResponse = response.generate(true, 'Failed to find items in Cart', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('Cart is Empty', 'Cart Remove Controller: removeFromCart', 5);
                    let apiResponse = response.generate(true, 'Cart is Empty', 404, null);
                    res.send(apiResponse);
                } else {
                    let position = 0;
                    for (item of result.items) {
                        position++;
                        if (item.name === req.body.productName) {
                            result.items.splice(position, 1);
                        }
                    }
                    logger.info('Item removed from cart Successfully', 'Cart Remove Controller: removeFromCart', 5);
                    let apiResponse = response.generate(false, 'Item removed from Cart', 200, result);
                    res.send(apiResponse);
                }
            });
    }
};//end removeFromCart()

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
        let apiResponse = response.generate(false, "Could not create product " + req.params.productType + " as product Model is not defined", 200, null);
        res.send(apiResponse);
    }


}//end createProduct

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
                    let apiResponse = response.generate(true, 'Failed to find the Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Product View Controller:viewByProductId', 5);
                    let apiResponse = response.generate(true, 'No Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product Found Successfully', 'Product View Controller:viewByProductId', 5);
                    let apiResponse = response.generate(false, 'Product Details Found', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Television") {
            televisionModel.findOne({ 'productId': req.params.productId }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Product View Controller: viewByProductId', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Product View Controller:viewByProductId', 5);
                    let apiResponse = response.generate(true, 'No Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product Found Successfully', 'Product View Controller:viewByProductId', 5);
                    let apiResponse = response.generate(false, 'Product Details Found', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Fashion") {
            fashionModel.findOne({ 'productId': req.params.productId }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Product View Controller: viewByProductId', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Product View Controller:viewByProductId', 5);
                    let apiResponse = response.generate(true, 'No Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product Found Successfully', 'Product View Controller:viewByProductId', 5);
                    let apiResponse = response.generate(false, 'Product Details Found', 200, result);
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
                    let apiResponse = response.generate(true, 'Failed to find the Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Product View Controller:viewProductByName', 5);
                    let apiResponse = response.generate(true, 'No Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product Found Successfully', 'Product View Controller:viewProductByName', 5);
                    let apiResponse = response.generate(false, 'Product Details Found', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Television") {
            televisionModel.findOne({ 'name': req.params.productName }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Product View Controller: viewProductByName', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Product View Controller:viewProductByName', 5);
                    let apiResponse = response.generate(true, 'No Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product Found Successfully', 'Product View Controller:viewProductByName', 5);
                    let apiResponse = response.generate(false, 'Product Details Found', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Fashion") {
            fashionModel.findOne({ 'name': req.params.productName }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Product View Controller: viewProductByName', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Product View Controller:viewProductByName', 5);
                    let apiResponse = response.generate(true, 'No Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product Found Successfully', 'Product View Controller:viewProductByName', 5);
                    let apiResponse = response.generate(false, 'Product Details Found', 200, result);
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
                    let apiResponse = response.generate(true, 'Failed to find the Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Product View Controller:viewByBrand', 5);
                    let apiResponse = response.generate(true, 'No Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product Found Successfully', 'Product View Controller:viewByBrand', 5);
                    let apiResponse = response.generate(false, 'Product Details Found', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Television") {
            televisionModel.find({ 'brand': req.params.brand }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Product View Controller: viewByBrand', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Product View Controller:viewByBrand', 5);
                    let apiResponse = response.generate(true, 'No Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product Found Successfully', 'Product View Controller:viewByBrand', 5);
                    let apiResponse = response.generate(false, 'Product Details Found', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Fashion") {
            fashionModel.find({ 'brand': req.params.brand }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Product View Controller: viewByBrand', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Product View Controller:viewByBrand', 5);
                    let apiResponse = response.generate(true, 'No Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product Found Successfully', 'Product View Controller:viewByBrand', 5);
                    let apiResponse = response.generate(false, 'Product Details Found', 200, result);
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
                    let apiResponse = response.generate(true, 'Failed to find the product', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Products Edit Controller:editProductById', 5);
                    let apiResponse = response.generate(true, 'No Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product edited Successfully', 'Products Edit Controller:editProductById', 5);
                    let apiResponse = response.generate(false, 'Product Found & Edited', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Television") {
            televisionModel.update({ 'productId': req.params.productId }, options, { multi: true }).exec((err, result) => {

                if (err) {
                    logger.error(err.message, 'Products Edit Controller: editProductById', 10);
                    let apiResponse = response.generate(true, 'Failed to find the product', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Products Edit Controller:editProductById', 5);
                    let apiResponse = response.generate(true, 'No Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product edited Successfully', 'Products Edit Controller:editProductById', 5);
                    let apiResponse = response.generate(false, 'Product Found & Edited', 200, result);
                    res.send(apiResponse);
                }

            });
        }
        else if (req.params.productType === "Fashion") {
            fashionModel.update({ 'productId': req.params.productId }, options, { multi: true }).exec((err, result) => {

                if (err) {
                    logger.error(err.message, 'Products Edit Controller: editProductById', 10);
                    let apiResponse = response.generate(true, 'Failed to find the product', 500, err); bo
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Product Found', 'Products Edit Controller:editProductById', 5);
                    let apiResponse = response.generate(true, 'No Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Product edited Successfully', 'Products Edit Controller:editProductById', 5);
                    let apiResponse = response.generate(false, 'Product Found & Edited', 200, result);
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
                    logger.error(err.message, 'Delete Controller: deleteProduct', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Mobile Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Mobile Found', 'Delete Controller:deleteProduct', 5);
                    let apiResponse = response.generate(true, 'No Mobile found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Mobile deleted Successfully', 'Delete Controller:deleteProduct', 5);
                    let apiResponse = response.generate(false, 'Mobile Found & Deleted', 200, result);
                    res.send(apiResponse);
                }

            });
        } else if (req.params.productType === "Television") {
            televisionModel.deleteOne({ 'productId': req.params.productId }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Delete Controller: deleteProduct', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Fashion Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Television Found', 'Delete Controller:deleteProduct', 5);
                    let apiResponse = response.generate(true, 'No Television found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Television deleted Successfully', 'Delete Controller:deleteProduct', 5);
                    let apiResponse = response.generate(false, 'Television Found & Deleted', 200, result);
                    res.send(apiResponse);
                }

            });

        } else if (req.params.productType === "Fashion") {
            fashionModel.deleteOne({ 'productId': req.params.productId }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Delete Controller: deleteProduct', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Fashion Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Fashion Product Found', 'Delete Controller:deleteProduct', 5);
                    let apiResponse = response.generate(true, 'No Fashion Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Fashion Product deleted Successfully', 'Delete Controller:deleteProduct', 5);
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
                    logger.error(err.message, 'Delete Controller: deleteProduct', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Mobile Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Mobile Found', 'Delete Controller:deleteProduct', 5);
                    let apiResponse = response.generate(true, 'No Mobile found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Mobile deleted Successfully', 'Delete Controller:deleteProduct', 5);
                    let apiResponse = response.generate(false, 'Mobile Found & Deleted', 200, result);
                    res.send(apiResponse);
                }

            });
        } else if (req.params.productType === "Television") {
            televisionModel.deleteOne({ 'name': req.params.productName }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Delete Controller: deleteProduct', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Fashion Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Television Found', 'Delete Controller:deleteProduct', 5);
                    let apiResponse = response.generate(true, 'No Television found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Television deleted Successfully', 'Delete Controller:deleteProduct', 5);
                    let apiResponse = response.generate(false, 'Television Found & Deleted', 200, result);
                    res.send(apiResponse);
                }

            });

        } else if (req.params.productType === "Fashion") {
            fashionModel.deleteOne({ 'name': req.params.productName }, (err, result) => {

                if (err) {
                    logger.error(err.message, 'Delete Controller: deleteProduct', 10);
                    let apiResponse = response.generate(true, 'Failed to find the Fashion Product Details', 500, err);
                    res.send(apiResponse);
                } else if (check.isEmpty(result)) {
                    logger.info('No Fashion Product Found', 'Delete Controller:deleteProduct', 5);
                    let apiResponse = response.generate(true, 'No Fashion Product found', 404, null);
                    res.send(apiResponse);
                } else {
                    logger.info('Fashion Product deleted Successfully', 'Delete Controller:deleteProduct', 5);
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
    hello: helloWorld,
    listProducts: listProducts,
    createProduct: createProduct,
    veiwProduct: viewByProductId,
    viewProductByName: viewProductByName,
    viewByBrand: viewByBrand,
    editProduct: editProduct,
    editProductByName: editProductByName,
    deleteProduct: deleteProduct,
    deleteProductByName: deleteProductByName
};
