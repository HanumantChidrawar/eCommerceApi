const mongoose = require('mongoose');

const schema = mongoose.Schema;

let cartSchema = new schema({

    name:{
        type: String,
        default: ""
    },
    items:[]
    
});//end cartSchema

mongoose.model('Cart',cartSchema);