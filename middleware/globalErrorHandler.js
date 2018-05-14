const response = require('./../library/responseLib');

let errorHandler = (err, req, res, next) =>{

    let apiResponse = apiResponse.generate(true, 'error occured at Application level',500, null);
    res.send(apiResponse);

}

let notFoundHandler = (req, res, next) => {

    let apiResponse = response.generate(true,"Route not found in the app",404, null);
    res.send(apiResponse);

}

module.exports ={
    errorHandler: errorHandler,
    notFoundHandler: notFoundHandler
}