/* to standardize the apiResponse */

let generate = (err, message) => {

    let response = {
        error: err,
        message: message,
        status: status,
        data: data
    }

    return response;
}

module.exports= {
    generate: generate
};