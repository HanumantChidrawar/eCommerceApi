const mongoose = require('mongoose');

const schema = mongoose.Schema;

let reviewModel1 = new schema({
    productName: {
        type: String,
        default: ""
    },
    reviews: []
});

mongoose.model('review', reviewModel1);
