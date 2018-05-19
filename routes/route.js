const express = require('express');
const createControllers = require('./../controllers/createApi');
const readControllers = require('./../controllers/readApi');
const updateControllers = require('./../controllers/updateApi');
const deleteControllers = require('./../controllers/deleteApi');
const cartControllers = require('./../controllers/cartApi');
const reviewControllers = require('./../controllers/reveiwApi');

const appConfig = require("./../config/appConfig");
const auth = require("./../middleware/authentication");

let setRoutes = (app) =>{

    let baseUrl = appConfig.apiVersion + '/eCommerce';

    app.get(`${baseUrl}/all`, auth.isAuthenticated,readControllers.listall)
    /**
	 * @api {get} /api/v1/eCommerce/all Get all products (Mobiles, Television, Fashion)
	 * @apiVersion 0.0.1
	 * @apiGroup read 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  
     *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Products Found",
	    "status": 200,
	    "data": [
					{
                        productId: "string",
                        category: "string",
                        brand: "string",
                        name: "string",
                        modelNumber: "string",
                        productModelName: "string",
                        color: "string",
                        browseType: "string",
                        hybridSimSlot: "string",
                        touchScreen: "string",
                        otgCompatible: "string",
                        quickCharging: "string",
                        warranty: "string",
                        operatingSystem: "string",
                        processorCore: "string",
                        clockSpeed: "string",
                        internalStorage: "string",
                        RAM: "string",
                        memoryCardSlotType: "string",
                        displaySize: "string",
                        resolution: "string",
                        resolutionType: "string",
                        primaryCamera: "string",
                        secondaryCamera: "string",
                        battery: "string",
                        price: "Number"
                        screenType: "string",
                        smartTv: "string",
                        HDMI: "Number",
                        USB: "Number",
                        launchYear: "string",
                        weight: "string",
                        dimensions: "string",
                        idealFor: "string",
                        suitableFor: "string",
                        pattern: "string",
                        faded: "string",
                        fabric: "string",
                        rise: "string",
                        size: "string",
                        reversible: "string",
                    }
	    		]
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "No Find Products Found",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(`${baseUrl}/:productType/list`, auth.isAuthenticated,readControllers.listProducts);
     /**
	 * @api {get} /api/v1/eCommerce/:productType/list Get all products of particular type(Mobiles, Television, Fashion)
	 * @apiVersion 0.0.1
	 * @apiGroup read 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productType Send the type of product to search the product as route parameter.
	 *  
     *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Products Found",
	    "status": 200,
	    "data": [
					{
                        productId: "string",
                        category: "string",
                        brand: "string",
                        name: "string",
                        modelNumber: "string",
                        productModelName: "string",
                        color: "string",
                        browseType: "string",
                        hybridSimSlot: "string",
                        touchScreen: "string",
                        otgCompatible: "string",
                        quickCharging: "string",
                        warranty: "string",
                        operatingSystem: "string",
                        processorCore: "string",
                        clockSpeed: "string",
                        internalStorage: "string",
                        RAM: "string",
                        memoryCardSlotType: "string",
                        displaySize: "string",
                        resolution: "string",
                        resolutionType: "string",
                        primaryCamera: "string",
                        secondaryCamera: "string",
                        battery: "string",
                        price: "Number"
                        screenType: "string",
                        smartTv: "string",
                        HDMI: "Number",
                        USB: "Number",
                        launchYear: "string",
                        weight: "string",
                        dimensions: "string",
                        idealFor: "string",
                        suitableFor: "string",
                        pattern: "string",
                        faded: "string",
                        fabric: "string",
                        rise: "string",
                        size: "string",
                        reversible: "string",
                    }
	    		]
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Product Details",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(`${baseUrl}/:productType/create`,auth.isAuthenticated,createControllers.createProduct);

    /**
	 * @api {post} /api/v1/eCommerce/:productType/create Creates products of particular type(Mobiles, Television, Fashion)
	 * @apiVersion 0.0.1
	 * @apiGroup create 
	 * @apiParam {String} productType Send the type of product to create the product as route parameter.
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} brand Send as Body Parameter
     * @apiParam {String} name Send as Body Parameter
     * @apiParam {String} modelNumber Send as Body Parameter
     * @apiParam {String} productModelName Send as Body Parameter
     * @apiParam {String} color Send as Body Parameter
     * @apiParam {String} browseType Send as Body Parameter
     * @apiParam {String} hybridSimSlot Send as Body Parameter
     * @apiParam {String} touchScreen Send as Body Parameter
     * @apiParam {String} otgCompatible Send as Body Parameter
     * @apiParam {String} quickCharging Send as Body Parameter
     * @apiParam {String} warranty Send as Body Parameter
     * @apiParam {String} operatingSystem Send as Body Parameter
     * @apiParam {String} processorCore Send as Body Parameter
     * @apiParam {String} clockSpeed Send as Body Parameter
     * @apiParam {String} internalStorage Send as Body Parameter
     * @apiParam {String} RAM Send as Body Parameter
     * @apiParam {String} memoryCardSlotType Send as Body Parameter
     * @apiParam {String} displaySize Send as Body Parameter
     * @apiParam {String} resolution Send as Body Parameter
     * @apiParam {String} resolutionType Send as Body Parameter
     * @apiParam {String} primaryCamera Send as Body Parameter
     * @apiParam {String} secondaryCamera Send as Body Parameter
     * @apiParam {String} battery Send as Body Parameter
     * @apiParam {Number} price Send as Body Parameter
     * @apiParam {String} screenType Send as Body Parameter
     * @apiParam {String} smartTv Send as Body Parameter
     * @apiParam {Number} HDMI Send as Body Parameter
     * @apiParam {Number} USB Send as Body Parameter
     * @apiParam {Number} launchYear Send as Body Parameter
     * @apiParam {String} weight Send as Body Parameter
     * @apiParam {String} dimensions Send as Body Parameter
     * @apiParam {String} idealFor Send as Body Parameter
     * @apiParam {String} suitableFor Send as Body Parameter
     * @apiParam {String} pattern Send as Body Parameter
     * @apiParam {String} faded Send as Body Parameter
     * @apiParam {String} fabric Send as Body Parameter
     * @apiParam {String} rise Send as Body Parameter
     * @apiParam {String} size Send as Body Parameter
     * @apiParam {String} reversible Send as Body Parameter
     * 
     *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product added Sucessfully",
	    "status": 200,
	    "data": 	{
                        productId: "string",
                        category: "string",
                        brand: "string",
                        name: "string",
                        modelNumber: "string",
                        productModelName: "string",
                        color: "string",
                        browseType: "string",
                        hybridSimSlot: "string",
                        touchScreen: "string",
                        otgCompatible: "string",
                        quickCharging: "string",
                        warranty: "string",
                        operatingSystem: "string",
                        processorCore: "string",
                        clockSpeed: "string",
                        internalStorage: "string",
                        RAM: "string",
                        memoryCardSlotType: "string",
                        displaySize: "string",
                        resolution: "string",
                        resolutionType: "string",
                        primaryCamera: "string",
                        secondaryCamera: "string",
                        battery: "string",
                        price: "Number"
                        screenType: "string",
                        smartTv: "string",
                        HDMI: "Number",
                        USB: "Number",
                        launchYear: "string",
                        weight: "string",
                        dimensions: "string",
                        idealFor: "string",
                        suitableFor: "string",
                        pattern: "string",
                        faded: "string",
                        fabric: "string",
                        rise: "string",
                        size: "string",
                        reversible: "string",
                    }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To add Product",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(`${baseUrl}/:productType/:productId/veiw`,auth.isAuthenticated,readControllers.veiwProduct);
    /**
	 * @api {get} /api/v1/eCommerce/:productType/:productId/veiw Get all details of particular product by its id
     * @apiVersion 0.0.1
	 * @apiGroup read 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productType as route parameter The type for making search easier from db.
     * @apiParam {String} productId as route parameter The Id for identifying the product in db.
	 *  
     *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Found",
	    "status": 200,
	    "data": {
                        productId: "string",
                        category: "string",
                        brand: "string",
                        name: "string",
                        modelNumber: "string",
                        productModelName: "string",
                        color: "string",
                        browseType: "string",
                        hybridSimSlot: "string",
                        touchScreen: "string",
                        otgCompatible: "string",
                        quickCharging: "string",
                        warranty: "string",
                        operatingSystem: "string",
                        processorCore: "string",
                        clockSpeed: "string",
                        internalStorage: "string",
                        RAM: "string",
                        memoryCardSlotType: "string",
                        displaySize: "string",
                        resolution: "string",
                        resolutionType: "string",
                        primaryCamera: "string",
                        secondaryCamera: "string",
                        battery: "string",
                        price: "Number"
                        screenType: "string",
                        smartTv: "string",
                        HDMI: "Number",
                        USB: "Number",
                        launchYear: "string",
                        weight: "string",
                        dimensions: "string",
                        idealFor: "string",
                        suitableFor: "string",
                        pattern: "string",
                        faded: "string",
                        fabric: "string",
                        rise: "string",
                        size: "string",
                        reversible: "string",
                }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "No Such Product Found",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(`${baseUrl}/:productType/:productName/veiwByName`,auth.isAuthenticated,readControllers.viewProductByName);
    /**
	 * @api {get} /api/v1/eCommerce/:productType/:productName/veiwByName Get all details of particular product by its Name.
	 * @apiVersion 0.0.1
	 * @apiGroup read 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productType as route parameter The type for making search easier from db.
     * @apiParam {String} productName as route parameter The Id for identifying the product in db.
	 *  
     *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Found",
	    "status": 200,
	    "data": {
                        productId: "string",
                        category: "string",
                        brand: "string",
                        name: "string",
                        modelNumber: "string",
                        productModelName: "string",
                        color: "string",
                        browseType: "string",
                        hybridSimSlot: "string",
                        touchScreen: "string",
                        otgCompatible: "string",
                        quickCharging: "string",
                        warranty: "string",
                        operatingSystem: "string",
                        processorCore: "string",
                        clockSpeed: "string",
                        internalStorage: "string",
                        RAM: "string",
                        memoryCardSlotType: "string",
                        displaySize: "string",
                        resolution: "string",
                        resolutionType: "string",
                        primaryCamera: "string",
                        secondaryCamera: "string",
                        battery: "string",
                        price: "Number"
                        screenType: "string",
                        smartTv: "string",
                        HDMI: "Number",
                        USB: "Number",
                        launchYear: "string",
                        weight: "string",
                        dimensions: "string",
                        idealFor: "string",
                        suitableFor: "string",
                        pattern: "string",
                        faded: "string",
                        fabric: "string",
                        rise: "string",
                        size: "string",
                        reversible: "string",
                }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "No Such Product Found",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(`${baseUrl}/:productType/:brand/veiwByBrand`,auth.isAuthenticated,readControllers.viewByBrand);
    /**
	 * @api {get} /api/v1/eCommerce/:productType/:brand/veiwByBrand Get all details of particular product by its Brand.
	 * @apiVersion 0.0.1
	 * @apiGroup read 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productType as route parameter The type for making search easier from db.
     * @apiParam {String} brand as route parameter The Id for identifying the product in db.
	 *  
     *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Found",
	    "status": 200,
	    "data": {
                        productId: "string",
                        category: "string",
                        brand: "string",
                        name: "string",
                        modelNumber: "string",
                        productModelName: "string",
                        color: "string",
                        browseType: "string",
                        hybridSimSlot: "string",
                        touchScreen: "string",
                        otgCompatible: "string",
                        quickCharging: "string",
                        warranty: "string",
                        operatingSystem: "string",
                        processorCore: "string",
                        clockSpeed: "string",
                        internalStorage: "string",
                        RAM: "string",
                        memoryCardSlotType: "string",
                        displaySize: "string",
                        resolution: "string",
                        resolutionType: "string",
                        primaryCamera: "string",
                        secondaryCamera: "string",
                        battery: "string",
                        price: "Number"
                        screenType: "string",
                        smartTv: "string",
                        HDMI: "Number",
                        USB: "Number",
                        launchYear: "string",
                        weight: "string",
                        dimensions: "string",
                        idealFor: "string",
                        suitableFor: "string",
                        pattern: "string",
                        faded: "string",
                        fabric: "string",
                        rise: "string",
                        size: "string",
                        reversible: "string",
                }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "No Such Product Found",
	    "status": 500,
	    "data": null
	   }
	 */

    app.put(`${baseUrl}/:productType/:productId/edit`,auth.isAuthenticated,updateControllers.editProduct);
    /**
	 * @api {put} /api/v1/eCommerce/:productType/:productId/edit edit the  details of particular product by its Id.
	 * @apiVersion 0.0.1
	 * @apiGroup edit 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productType as route parameter The type for making search easier from db.
     * @apiParam {String} productId as route parameter The Id for identifying the product in db.
	 * @apiParam {String} parameters to be edited as body parameter.
     * 
     *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false, 
	    "message": "Product Found & Edited",
	    "status": 200,
	    "data": {
                    "ok": number of field edited,
                    "n": number of field edited,
                    "nModified": number of field edited
                }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To edit Product Details",
	    "status": 500,
	    "data": null
	   }
	 */

    app.put(`${baseUrl}/:productType/:productName/editByName`,auth.isAuthenticated,updateControllers.editProductByName);

    /**
	 * @api {put} /api/v1/eCommerce/:productType/:productName/editByName edit the details of particular product by its Name.
	 * @apiVersion 0.0.1
	 * @apiGroup edit 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productType as route parameter The type for making search easier from db.
     * @apiParam {String} productName as route parameter The Id for identifying the product in db.
	 * @apiParam {String} the parameter to be edited as body parameter.
     * 
     *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Found & Edited",
	    "status": 200,
	    "data": {
                    "ok": number of field edited,
                    "n": number of field edited,
                    "nModified": number of field edited
                }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To edit Product Details",
	    "status": 500,
	    "data": null
	   }
	 */
    app.post(`${baseUrl}/:productType/:productId/delete`,auth.isAuthenticated,deleteControllers.deleteProduct);
    
    /**
	 * @api {post} /api/v1/eCommerce/:productType/:productId/delete deletes all details of particular product by its Id.
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} product send as route parameter The type for making search easier from db.
     * @apiParam {String} productId send as route parameter The Id for identifying the product in db.
     * 
     *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Found & Deleted",
	    "status": 200,
	    "data": {
                    "ok": number of items deleted,
                    "n": number of items deleted,
                    "nModified": number of items deleted
                }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To delete Product Details",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(`${baseUrl}/:productType/:productName/deleteByName`,auth.isAuthenticated,deleteControllers.deleteProductByName);
    /**
	 * @api {post} /api/v1/eCommerce/:productType/:productName/deleteByName deletes all details of particular product by its Name.
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productType send as route parameter The type for making search easier from db.
     * @apiParam {String} productName send as route parameter The Id for identifying the product in db.
     * 
     *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Found & Deleted",
	    "status": 200,
	    "data": {
                    "ok": number of items deleted,
                    "n": number of items deleted,
                    "nModified": number of items deleted
                }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To delete Product Details",
	    "status": 500,
	    "data": null
	   }
	 */
    app.put(`${baseUrl}/:productName/addToCart`,auth.isAuthenticated,cartControllers.addToCart);
    /**
	 * @api {put} /api/v1/eCommerce/:productName/addToCart Add products to the user's Cart by using product name & type.
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productName as route parameter The type for making search easier from db.
     * @apiParam {String} userName as body Parameter.
     * @apiParam {String} productId as body Parameter.
     * 
     *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product added to cart successfully",
	    "status": 200,
	    "data": {
                    name: "Name of the user whoose cart",
                    items:[
                        prdouct details 
                    ]
                }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to add product to cart",
	    "status": 500,
	    "data": null
	   }
	 */
    app.put(`${baseUrl}/:productName/removeFromCart`,auth.isAuthenticated,cartControllers.removeFromCart);
    /**
	 * @api {put} /api/v1/eCommerce/:productName/removeFromCart remove product from the user's Cart by using product name & type.
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productName as route parameter The type for making search easier from db.
     * @apiParam {String} userName as body Parameter.
      
     *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Removed successfully",
	    "status": 200,
	    "data": {
                    name: "Name of the user whoose cart",
                    items:[
                        Details of product in the cart
                    ]
                }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to remove from cart",
	    "status": 500,
	    "data": null
	   }
	 */
    app.get(`${baseUrl}/:userName/getCart`,auth.isAuthenticated,cartControllers.getCart);
    /**
	 * @api {get} /api/v1/eCommerce/:userName/getCart get products in the user's Cart by using User name 
     *
     * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} userName as route parameter The type for making search easier from db.
     
     * 
     *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "User Cart",
	    "status": 200,
	    "data": {
                    name: "Name of the user whoose cart",
                    items:[
                        Details of product in the cart
                    ]
                }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to find items in Cart",
	    "status": 500,
	    "data": null
	   }
	 */
    app.post(`${baseUrl}/:productName/addReview`,auth.isAuthenticated,reviewControllers.addReview);
    /**
	 * @api {post} /api/v1/eCommerce/:productName/addReview To addreview on the product whoose name is provided.
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productName as route parameter.
     * @apiParam {String} rating as body parameter.
     * @apiParam {String} description as body parameter.
     * @apiParam {String} name as body parameter.
     * 
     *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Review added successfully",
	    "status": 200,
	    "data": {
                    "productName": "Name of the product",
                    "reviews":[
                        {
                            "rating": "Number",
                            "description": "String",
                            "name": "String",
                        }
                    ]
                }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to add review",
	    "status": 500,
	    "data": null
	   }
	 */
    app.get(`${baseUrl}/:productName/getReview`, auth.isAuthenticated,reviewControllers.getReview);
    /**
	 * @api {get} /api/v1/eCommerce/:productName/getReview To getreview on the product whoose name is provided.
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productName as route parameter.
     *
     *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "reviews Found",
	    "status": 200,
	    "data": {
                    "productName": "Name of the product",
                    "reviews":[
                        {
                            "rating": "Number",
                            "description": "String",
                            "name": "String",
                        }
                    ]
                }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to get all reviews",
	    "status": 500,
	    "data": null
	   }
	 */
}

module.exports = {
    setRoutes: setRoutes
};
