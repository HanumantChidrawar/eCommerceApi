const mongoose = require('mongoose');

//import schema class from mongoose
const schema = mongoose.Schema;

let televisionSchema1 = new schema({

    productId: {
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
    productModelName: {
        type: String,
        default: ""
    },
    color: {
        type: String,
        default: ""
    },
    displaySize: {
        type: String,
        default: ""
    },
    screenType: {
        type: String,
        default: ""
    },
    resolution: {
        type: String,
        default: ""
    },
    smartTv: {
        type: String,
        default: ""
    },
    HDMI: {
        type: Number,
        default: 0
    },
    USB: {
        type: Number,
        default: 0
    },
    operatingSystem: {
        type: String,
        default: ""
    },
    launchYear: {
        type: Number,
        default: 0
    },
    processor: {
        type: String,
        default: ""
    },
    weight: {
        type: String,
        default: ""
    },
    dimensions:{
        type: String,
        default: ""
    },
    price:{
        type: Number,
        default: ""
    }


});

mongoose.model('Television', televisionSchema1);
