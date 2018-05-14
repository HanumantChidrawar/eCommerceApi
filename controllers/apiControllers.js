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


let helloWorld = (req, res) =>{
    res.send("Hello World");
}


let listMobiles = (req,res) =>{

    mobileModel.find()
        .select('-__v -_d')
        .lean()
        .exe((err, result)=>{

            if(err){
                logger.error(err.message,'MobilesController: list all Mobiles',10);
                let apiresponse = response.generate(true,'Failed to get all mobiles',500,null);
                res.send(apiresponse);
            }else if( check.isEmpty(result)){
                logger.info("No Mobile Found","MobilesController: list all Mobiles",10);
                let apiresponse = response.generate(true, "No Mobile Found", 404, null);
                res.send(apiresponse);
            }else{
                logger.info("Mobiles found","MobilesController: list all mobiles",10);
                let apiresponse = response.generate(false, "Mobiles found", 200, result);
                res.send(apiresponse);
            }
        });

}//end listMobiles

let createMobile = (req,res) =>{

    let id = shortid.generate();

    let newMobile = new mobileModel({

        id: id,
        category: "Mobile",
        brand: req.body.brand,
        name: req.body.name,
        modelNumber: req.body.modelNumber,
        modelName: req.body.modelName,
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
        battery: req.body.secondaryCamera

    });//end mobileModel

    let images = (req.body.images != undefined || req.body.images != "" || req.body.images != null)? req.body.images.split(','):[];
    req.body.images = images;

    let inTheBox = (req.body.inTheBox != undefined || req.body.inTheBox != "" || req.body.inTheBox != null)? req.body.inTheBox.split(','):[];
    req.body.inTheBox = inTheBox;
    
    newMobile.save((err, result)=>{

        if(err){
            logger.error(err.message,"apiControllers: createMobileController",10);
            let apiResponse = response.generate(true,"Failed to create mobile.",500 ,null);
            res.send(apiResponse);
        }
        else{
            logger.info("Mobile added successfully","apiControllers: createMobileController",10);
            let apiResponse = response.generate(false, "Mobile added successfully", 200, result);
            res.send(apiResponse);
        }
    });//end newMobile save()

}//end createMobile

module.exports = {
    hello: helloWorld,
    listMobiles: listMobiles,
    createMobile: createMobile
};
