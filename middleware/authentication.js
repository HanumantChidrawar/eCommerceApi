const logger = require('./../library/customLogger');
const response = require('./../library/responseLib');
const check = require('./../library/checkLib');

let isAuthenticated = (req, res, next)=>{
 
    if(req.params.authToken || req.query.authToken || req.header('authToken') ){
        if(req.params.authToken === "Admin" || req.query.authToken === "Admin" || req.header('authToken') === "Admin" ){
            req.user = {name:"Admin", userId:"Admin"};
            next();
        }
        else{
            logger.error("Incorrect authentication token","Authentication middlewar",5);
            let apiResponse = response.generate(true,"Authentication token mismatch",400,null);
            res.send(apiResponse);
        }

    }
    else{
        logger.error("Authentication token missing","Authentication Middleware",5);
        let apiResponse = response.generate(true, "Authentication token not found", 400, null);
        res.send(apiResponse);
    }

}

module.exports ={
    isAuthenticated: isAuthenticated
};