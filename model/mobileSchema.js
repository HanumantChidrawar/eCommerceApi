const mongoose = require('mongoose');

//import schema class from mongoose
const schema = mongoose.Schema;

let mobileSchema = new schema({

    id: {
        type: String,
        unique: true
    },
    category: {
        type: String,
        default: ""
    },
    brand: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        default: ""
    },
    images: [],
    inTheBox: [],
    modelNumber: {
        type: String,
        default: ""
    },
    modelName: {
        type: String,
        default: ""
    },
    color: {
        type: String,
        default: ""
    },
    browseType: {
        type: String,
        default: ""
    },
    hybridSimSlot: {
        type: String,
        default: ""
    },
    touchScreen: {
        type: String,
        default: ""
    },
    otgCompatible: {
        type: String,
        default: ""
    },
    quickCharging: {
        type: String,
        default: ""
    },
    warranty: {
        type: String,
        default: ""
    },
    operatingSystem: {
        type: String,
        default: ""
    },
    processorCore: {
        type: String,
        default: ""
    },
    clockSpeed: {
        type: String,
        default: ""
    },
    internalStorage: {
        type: String,
        default: ""
    },
    RAM: {
        type: String,
        default: ""
    },
    memoryCardSlotType: {
        type: String,
        default: ""
    },
    displaySize:{
        type: String,
        default: ""
    },
    resolution:{
        type: String,
        default: ""
    },
    resolutionType:{
        type: String,
        default: ""
    },
    primaryCamera:{
        type: String,
        default: ""
    },
    secondaryCamera:{
        type: String,
        default: ""
    },
    battery:{
        type: String,
        default: ""
    },
    warranty:{
        type: String,
        default: ""
    }
});

mongoose.model('Mobile', mobileSchema);
