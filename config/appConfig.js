//file for storing all the configuration data 
let appConfig = {
    port: 3000,
    allowedCorsOrigin: "*",
    env : "dev",
    db:{
        uri: 'mongodb://127.0.0.1:27017/eCommerce'
    },
    apiVersion: '/api/v1'
};

module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    enviornment: appConfig.env,
    db: appConfig.db,
    apiVersion: appConfig.apiVersion
};