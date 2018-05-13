const mongoose  = require('mongoose');

//import schema class from mongoose
const schema = mongoose.Schema;

let mobileSchema = new schema({

    id:{
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
        default: type
    },
    images:[],
    specifications:{
        type:{
            inTheBox:[],
            modelNumber:{
                type: String,
                default: ""
            },
            modelName:{
                type: String,
                default:""
            },
            color:{
                type: String,
                default: ""
            },
            browseType:{
                type: String,
                default: ""
            },
            hybridSimSlot:{
                type: String,
                default:""
            },
            touchScreen:{
                type: String,
                default: ""
            },
            otgCompatible:{
                type: String,
                default: ""
            },
            quickCharging:{
                type: String,
                default: ""
            },
            warranty:{
                type: String,
                default: ""
            },
            operatingSystem:{
                type: String,
                default: ""
            },
            processorCore:{
                type: String,
                default: ""
            },
            primaryClockSpeed:{
                type: String,
                default: ""
            },
            internalStorage:{
                type: String,
                default: ""
            },
            RAM:{
                type: String,
                default: ""
            },
            memoryCardSlotType:{
                type: String,
                default: ""
            }
        }
    }

});