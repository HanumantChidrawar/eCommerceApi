const mongoose  = require('mongoose');

//import schema class from mongoose
const schema = mongoose.Schema;

let fashionSchema1 = new schema({

    productId:{
        type: String,
        unique: true
    },
    category:{
        type: String,
        default: ""
    },
    subCategory:{
        type: String,
        default: ""
    },
    brand:{
        type: String,
        default: ""
    },
    name:{
        type: String,
        default: ""
    },
    images:[],
    specifications:{
        type:{
            idealFor:{
                type: String,
                default: ""
            },
	    suitableFor:{
                type: String,
                default: ""
            },
            pattern:{
                type: String,
                default:""
            },
            fabric:{
                type: String,
                default: ""
            },
            faded:{
                type: String,
                default: ""
            },
            rise:{
                type: String,
                default:""
            },
            reversible:{
                type: String,
                default: ""
            }
        }
    }

});

mongoose.model('Fashion',fashionSchema1);
