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
const cartModel = mongoose.model('cart');

let myCart = new cartModel();

let addToCart = (req, res) => {
    if (check.isEmpty(req.params.productName)) {
        let apiResponse = response.generate(true, 'productName is missing cannot add to cart', 403, null);
        res.send(apiResponse);
    }
    else if (check.isEmpty(req.body.productType)) {
        let apiResponse = response.generate(true, 'productType is missing cannot add to cart', 403, null);
        res.send(apiResponse);
    }
    else if (check.isEmpty(req.body.userName)) {
        let apiResponse = response.generate(true, 'userName is missing', 403, null);
        res.send(apiResponse);
    }
    else {
        myCart.name = req.body.userName;
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
        else if (req.body.productType === "Fashion") {

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
            let apiresponse = response.generate(false, "No Product found", 200, null);
            res.send(apiresponse);
        }
    }
};//end addToCart()

let removeFromCart = (req, res) => {
    if (check.isEmpty(req.params.productName)) {
        let apiResponse = response.generate(true, 'productName is required to remove from cart', 403, null);
        res.send(apiResponse);
    }
    else if (check.isEmpty(req.body.userName)) {
        let apiResponse = response.generate(true, 'UserName is missing', 403, null);
        res.send(apiResponse);
    }
    else {
        cartModel.findOne({'name': req.body.userName},(err, result) => {

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
                    
                    if (item.name === req.params.productName) {
                        result.items.splice(position, 1);
                        break;
                    }
                    position++;
                }

                result.save((err, result1) => {

                    if (err) {
                        logger.error(err.message, "cartApi: removeFromCartController", 10);
                        let apiResponse = response.generate(true, "Failed to remove from cart.", 500, null);
                        res.send(apiResponse);
                    }
                    else {
                        logger.info("Removed successfully", "cartApi: removeFromCartController", 10);
                        let apiResponse = response.generate(false, "Removed successfully", 200, result1);
                        res.send(apiResponse);
                    }
                });//end result save()
            }
        });
    }
};//end removeFromCart()

let getCart = (req, res) => {
    if (check.isEmpty(req.params.userName)) {
        let apiResponse = response.generate(true, 'userName is required to get cart', 403, null);
        res.send(apiResponse);
    }
    else {
        cartModel.findOne({'name': req.params.userName},(err, result) => {

            if (err) {
                logger.error(err.message, 'Cart Show Controller: showCart', 10);
                let apiResponse = response.generate(true, 'Failed to find items in Cart', 500, err);
                res.send(apiResponse);
            } else if (check.isEmpty(result)) {
                logger.info('Cart is Empty', 'Cart Show Controller: showCart', 5);
                let apiResponse = response.generate(true, 'Cart is Empty', 404, null);
                res.send(apiResponse);
            } else {
                let position = 0;
                console.log(result.items.length);
                for (item of result.items) {
                    
                    if (item.name === req.params.productName) {
                        console.log(position);
                        result.items.splice(position, 1);
                        console.log(result);
                        break;
                    }
                    position++;
                }
                logger.info('User Cart is Empty', 'Cart Show Controller: showCart', 5);
                let apiResponse = response.generate(false, 'User Cart', 200, result);
                res.send(apiResponse);
            }
        });
    }
};//end getCart()

module.exports = {

    addToCart: addToCart,
    removeFromCart: removeFromCart,
    getCart: getCart

};
