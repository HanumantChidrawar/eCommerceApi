//const express = require('express');
const mongoose = require('mongoose');
const check = require('./../library/checkLib');
const response = require('./../library/responseLib');
const logger = require('./../library/customLogger');

//importing models here
const reviewModel = mongoose.model('review');

let addReview = (req, res) => {

    if (check.isEmpty(req.params.productName)) {

        console.log('productName should be passed')
        let apiResponse = response.generate(true, 'productName is missing', 403, null)
        res.send(apiResponse)
    }
    else {
        let newReview = new reviewModel({

            productName: req.params.productName,

        });

        let singleReview = {
            rating: req.body.rating,
            description: req.body.description,
            name: req.body.name
        };

        reviewModel.findOne({ 'productName': req.params.productName }, (err, result) => {
            if (err) {
                logger.error(err.message, 'Review Controller: getReview', 10);
                let apiResponse = response.generate(true, 'Failed to find the review for given Details', 500, err);
                res.send(apiResponse);
            } else if (check.isEmpty(result)) {

                newReview.reviews.push(singleReview);

                newReview.save((err, result) => {

                    if (err) {
                        logger.error(err.message, "reveiwApi: addReviewController", 10);
                        let apiResponse = response.generate(true, "Failed to add review.", 500, null);
                        res.send(apiResponse);
                    }
                    else {
                        logger.info("Review added successfully", "reveiwApi: addReviewController", 10);
                        let apiResponse = response.generate(false, "Review added successfully", 200, result);
                        res.send(apiResponse);
                    }
                });//end newReview save()

            } else {
                result.reviews.push(singleReview);

                result.save((err, result1) => {

                    if (err) {
                        logger.error(err.message, "reveiwApi: addReviewController", 10);
                        let apiResponse = response.generate(true, "Failed to add review.", 500, null);
                        res.send(apiResponse);
                    }
                    else {
                        logger.info("Review added successfully", "reveiwApi: addReviewController", 10);
                        let apiResponse = response.generate(false, "Review added successfully", 200, result1);
                        res.send(apiResponse);
                    }
                });//end newReview save()
            }
        });


    }
}//end addReview

let getReview = (req, res) => {

    if (check.isEmpty(req.params.productName)) {

        console.log('productName should be passed')
        let apiResponse = response.generate(true, 'productName is missing', 403, null)
        res.send(apiResponse)
    }
    else {

        reviewModel.findOne({ 'productName': req.params.productName }, (err, result) => {

            if (err) {
                logger.error(err.message, 'reviewApi: get all reviews', 10);
                let apiresponse = response.generate(true, 'Failed to get all reviews', 500, null);
                res.send(apiresponse);
            } else if (check.isEmpty(result)) {
                logger.info("No Reviews Found", "reviewApi: list all reviews", 10);
                let apiresponse = response.generate(true, "No review Found", 404, null);
                res.send(apiresponse);
            } else {
                logger.info("reviews found", "reviewApi: list all reviews", 10);
                let apiresponse = response.generate(false, "reviews found", 200, result);
                res.send(apiresponse);
            }
        });
    }
}//end getReview

module.exports = {
    addReview: addReview,
    getReview: getReview
}