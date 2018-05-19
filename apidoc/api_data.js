define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/eCommerce/:productName/addReview",
    "title": "To addreview on the product whoose name is provided.",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>as route parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rating",
            "description": "<p>as body parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>as body parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>as body parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Review added successfully\",\n\t    \"status\": 200,\n\t    \"data\": {\n                    \"productName\": \"Name of the product\",\n                    \"reviews\":[\n                        {\n                            \"rating\": \"Number\",\n                            \"description\": \"String\",\n                            \"name\": \"String\",\n                        }\n                    ]\n                }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to add review\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "create",
    "name": "PostApiV1EcommerceProductnameAddreview"
  },
  {
    "type": "post",
    "url": "/api/v1/eCommerce/:productType/create",
    "title": "Creates products of particular type(Mobiles, Television, Fashion)",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>Send the type of product to create the product as route parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brand",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modelNumber",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productModelName",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "browseType",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hybridSimSlot",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "touchScreen",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otgCompatible",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quickCharging",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warranty",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operatingSystem",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "processorCore",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clockSpeed",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "internalStorage",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "RAM",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "memoryCardSlotType",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "displaySize",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resolution",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resolutionType",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "primaryCamera",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secondaryCamera",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "battery",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "screenType",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "smartTv",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "HDMI",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "USB",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "launchYear",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dimensions",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idealFor",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "suitableFor",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pattern",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "faded",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fabric",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rise",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>Send as Body Parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reversible",
            "description": "<p>Send as Body Parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product added Sucessfully\",\n\t    \"status\": 200,\n\t    \"data\": \t{\n                        productId: \"string\",\n                        category: \"string\",\n                        brand: \"string\",\n                        name: \"string\",\n                        modelNumber: \"string\",\n                        productModelName: \"string\",\n                        color: \"string\",\n                        browseType: \"string\",\n                        hybridSimSlot: \"string\",\n                        touchScreen: \"string\",\n                        otgCompatible: \"string\",\n                        quickCharging: \"string\",\n                        warranty: \"string\",\n                        operatingSystem: \"string\",\n                        processorCore: \"string\",\n                        clockSpeed: \"string\",\n                        internalStorage: \"string\",\n                        RAM: \"string\",\n                        memoryCardSlotType: \"string\",\n                        displaySize: \"string\",\n                        resolution: \"string\",\n                        resolutionType: \"string\",\n                        primaryCamera: \"string\",\n                        secondaryCamera: \"string\",\n                        battery: \"string\",\n                        price: \"Number\"\n                        screenType: \"string\",\n                        smartTv: \"string\",\n                        HDMI: \"Number\",\n                        USB: \"Number\",\n                        launchYear: \"string\",\n                        weight: \"string\",\n                        dimensions: \"string\",\n                        idealFor: \"string\",\n                        suitableFor: \"string\",\n                        pattern: \"string\",\n                        faded: \"string\",\n                        fabric: \"string\",\n                        rise: \"string\",\n                        size: \"string\",\n                        reversible: \"string\",\n                    }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To add Product\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "create",
    "name": "PostApiV1EcommerceProducttypeCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/eCommerce/:productType/:productId/delete",
    "title": "deletes all details of particular product by its Id.",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product",
            "description": "<p>send as route parameter The type for making search easier from db.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>send as route parameter The Id for identifying the product in db.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Found & Deleted\",\n\t    \"status\": 200,\n\t    \"data\": {\n                    \"ok\": number of items deleted,\n                    \"n\": number of items deleted,\n                    \"nModified\": number of items deleted\n                }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To delete Product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "delete",
    "name": "PostApiV1EcommerceProducttypeProductidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/eCommerce/:productType/:productName/deleteByName",
    "title": "deletes all details of particular product by its Name.",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>send as route parameter The type for making search easier from db.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>send as route parameter The Id for identifying the product in db.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Found & Deleted\",\n\t    \"status\": 200,\n\t    \"data\": {\n                    \"ok\": number of items deleted,\n                    \"n\": number of items deleted,\n                    \"nModified\": number of items deleted\n                }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To delete Product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "delete",
    "name": "PostApiV1EcommerceProducttypeProductnameDeletebyname"
  },
  {
    "type": "put",
    "url": "/api/v1/eCommerce/:productName/addToCart",
    "title": "Add products to the user's Cart by using product name & type.",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>as route parameter The type for making search easier from db.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>as body Parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>as body Parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product added to cart successfully\",\n\t    \"status\": 200,\n\t    \"data\": {\n                    name: \"Name of the user whoose cart\",\n                    items:[\n                        prdouct details \n                    ]\n                }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to add product to cart\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "edit",
    "name": "PutApiV1EcommerceProductnameAddtocart"
  },
  {
    "type": "put",
    "url": "/api/v1/eCommerce/:productName/removeFromCart",
    "title": "remove product from the user's Cart by using product name & type.",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>as route parameter The type for making search easier from db.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>as body Parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Removed successfully\",\n\t    \"status\": 200,\n\t    \"data\": {\n                    name: \"Name of the user whoose cart\",\n                    items:[\n                        Details of product in the cart\n                    ]\n                }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to remove from cart\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "edit",
    "name": "PutApiV1EcommerceProductnameRemovefromcart"
  },
  {
    "type": "put",
    "url": "/api/v1/eCommerce/:productType/:productId/edit",
    "title": "edit the  details of particular product by its Id.",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>as route parameter The type for making search easier from db.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>as route parameter The Id for identifying the product in db.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>to be edited as body parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false, \n\t    \"message\": \"Product Found & Edited\",\n\t    \"status\": 200,\n\t    \"data\": {\n                    \"ok\": number of field edited,\n                    \"n\": number of field edited,\n                    \"nModified\": number of field edited\n                }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To edit Product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "edit",
    "name": "PutApiV1EcommerceProducttypeProductidEdit"
  },
  {
    "type": "put",
    "url": "/api/v1/eCommerce/:productType/:productName/editByName",
    "title": "edit the details of particular product by its Name.",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>as route parameter The type for making search easier from db.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>as route parameter The Id for identifying the product in db.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "the",
            "description": "<p>parameter to be edited as body parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Found & Edited\",\n\t    \"status\": 200,\n\t    \"data\": {\n                    \"ok\": number of field edited,\n                    \"n\": number of field edited,\n                    \"nModified\": number of field edited\n                }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To edit Product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "edit",
    "name": "PutApiV1EcommerceProducttypeProductnameEditbyname"
  },
  {
    "type": "get",
    "url": "/api/v1/eCommerce/all",
    "title": "Get all products (Mobiles, Television, Fashion)",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Products Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n                        productId: \"string\",\n                        category: \"string\",\n                        brand: \"string\",\n                        name: \"string\",\n                        modelNumber: \"string\",\n                        productModelName: \"string\",\n                        color: \"string\",\n                        browseType: \"string\",\n                        hybridSimSlot: \"string\",\n                        touchScreen: \"string\",\n                        otgCompatible: \"string\",\n                        quickCharging: \"string\",\n                        warranty: \"string\",\n                        operatingSystem: \"string\",\n                        processorCore: \"string\",\n                        clockSpeed: \"string\",\n                        internalStorage: \"string\",\n                        RAM: \"string\",\n                        memoryCardSlotType: \"string\",\n                        displaySize: \"string\",\n                        resolution: \"string\",\n                        resolutionType: \"string\",\n                        primaryCamera: \"string\",\n                        secondaryCamera: \"string\",\n                        battery: \"string\",\n                        price: \"Number\"\n                        screenType: \"string\",\n                        smartTv: \"string\",\n                        HDMI: \"Number\",\n                        USB: \"Number\",\n                        launchYear: \"string\",\n                        weight: \"string\",\n                        dimensions: \"string\",\n                        idealFor: \"string\",\n                        suitableFor: \"string\",\n                        pattern: \"string\",\n                        faded: \"string\",\n                        fabric: \"string\",\n                        rise: \"string\",\n                        size: \"string\",\n                        reversible: \"string\",\n                    }\n\t    \t\t]\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"No Find Products Found\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceAll"
  },
  {
    "type": "get",
    "url": "/api/v1/eCommerce/:productName/getReview",
    "title": "To getreview on the product whoose name is provided.",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>as route parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"reviews Found\",\n\t    \"status\": 200,\n\t    \"data\": {\n                    \"productName\": \"Name of the product\",\n                    \"reviews\":[\n                        {\n                            \"rating\": \"Number\",\n                            \"description\": \"String\",\n                            \"name\": \"String\",\n                        }\n                    ]\n                }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to get all reviews\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceProductnameGetreview"
  },
  {
    "type": "get",
    "url": "/api/v1/eCommerce/:productType/:brand/veiwByBrand",
    "title": "Get all details of particular product by its Brand.",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>as route parameter The type for making search easier from db.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brand",
            "description": "<p>as route parameter The Id for identifying the product in db.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Found\",\n\t    \"status\": 200,\n\t    \"data\": {\n                        productId: \"string\",\n                        category: \"string\",\n                        brand: \"string\",\n                        name: \"string\",\n                        modelNumber: \"string\",\n                        productModelName: \"string\",\n                        color: \"string\",\n                        browseType: \"string\",\n                        hybridSimSlot: \"string\",\n                        touchScreen: \"string\",\n                        otgCompatible: \"string\",\n                        quickCharging: \"string\",\n                        warranty: \"string\",\n                        operatingSystem: \"string\",\n                        processorCore: \"string\",\n                        clockSpeed: \"string\",\n                        internalStorage: \"string\",\n                        RAM: \"string\",\n                        memoryCardSlotType: \"string\",\n                        displaySize: \"string\",\n                        resolution: \"string\",\n                        resolutionType: \"string\",\n                        primaryCamera: \"string\",\n                        secondaryCamera: \"string\",\n                        battery: \"string\",\n                        price: \"Number\"\n                        screenType: \"string\",\n                        smartTv: \"string\",\n                        HDMI: \"Number\",\n                        USB: \"Number\",\n                        launchYear: \"string\",\n                        weight: \"string\",\n                        dimensions: \"string\",\n                        idealFor: \"string\",\n                        suitableFor: \"string\",\n                        pattern: \"string\",\n                        faded: \"string\",\n                        fabric: \"string\",\n                        rise: \"string\",\n                        size: \"string\",\n                        reversible: \"string\",\n                }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"No Such Product Found\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceProducttypeBrandVeiwbybrand"
  },
  {
    "type": "get",
    "url": "/api/v1/eCommerce/:productType/list",
    "title": "Get all products of particular type(Mobiles, Television, Fashion)",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>Send the type of product to search the product as route parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Products Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n                        productId: \"string\",\n                        category: \"string\",\n                        brand: \"string\",\n                        name: \"string\",\n                        modelNumber: \"string\",\n                        productModelName: \"string\",\n                        color: \"string\",\n                        browseType: \"string\",\n                        hybridSimSlot: \"string\",\n                        touchScreen: \"string\",\n                        otgCompatible: \"string\",\n                        quickCharging: \"string\",\n                        warranty: \"string\",\n                        operatingSystem: \"string\",\n                        processorCore: \"string\",\n                        clockSpeed: \"string\",\n                        internalStorage: \"string\",\n                        RAM: \"string\",\n                        memoryCardSlotType: \"string\",\n                        displaySize: \"string\",\n                        resolution: \"string\",\n                        resolutionType: \"string\",\n                        primaryCamera: \"string\",\n                        secondaryCamera: \"string\",\n                        battery: \"string\",\n                        price: \"Number\"\n                        screenType: \"string\",\n                        smartTv: \"string\",\n                        HDMI: \"Number\",\n                        USB: \"Number\",\n                        launchYear: \"string\",\n                        weight: \"string\",\n                        dimensions: \"string\",\n                        idealFor: \"string\",\n                        suitableFor: \"string\",\n                        pattern: \"string\",\n                        faded: \"string\",\n                        fabric: \"string\",\n                        rise: \"string\",\n                        size: \"string\",\n                        reversible: \"string\",\n                    }\n\t    \t\t]\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceProducttypeList"
  },
  {
    "type": "get",
    "url": "/api/v1/eCommerce/:productType/:productId/veiw",
    "title": "Get all details of particular product by its id",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>as route parameter The type for making search easier from db.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>as route parameter The Id for identifying the product in db.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Found\",\n\t    \"status\": 200,\n\t    \"data\": {\n                        productId: \"string\",\n                        category: \"string\",\n                        brand: \"string\",\n                        name: \"string\",\n                        modelNumber: \"string\",\n                        productModelName: \"string\",\n                        color: \"string\",\n                        browseType: \"string\",\n                        hybridSimSlot: \"string\",\n                        touchScreen: \"string\",\n                        otgCompatible: \"string\",\n                        quickCharging: \"string\",\n                        warranty: \"string\",\n                        operatingSystem: \"string\",\n                        processorCore: \"string\",\n                        clockSpeed: \"string\",\n                        internalStorage: \"string\",\n                        RAM: \"string\",\n                        memoryCardSlotType: \"string\",\n                        displaySize: \"string\",\n                        resolution: \"string\",\n                        resolutionType: \"string\",\n                        primaryCamera: \"string\",\n                        secondaryCamera: \"string\",\n                        battery: \"string\",\n                        price: \"Number\"\n                        screenType: \"string\",\n                        smartTv: \"string\",\n                        HDMI: \"Number\",\n                        USB: \"Number\",\n                        launchYear: \"string\",\n                        weight: \"string\",\n                        dimensions: \"string\",\n                        idealFor: \"string\",\n                        suitableFor: \"string\",\n                        pattern: \"string\",\n                        faded: \"string\",\n                        fabric: \"string\",\n                        rise: \"string\",\n                        size: \"string\",\n                        reversible: \"string\",\n                }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"No Such Product Found\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceProducttypeProductidVeiw"
  },
  {
    "type": "get",
    "url": "/api/v1/eCommerce/:productType/:productName/veiwByName",
    "title": "Get all details of particular product by its Name.",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productType",
            "description": "<p>as route parameter The type for making search easier from db.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>as route parameter The Id for identifying the product in db.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Found\",\n\t    \"status\": 200,\n\t    \"data\": {\n                        productId: \"string\",\n                        category: \"string\",\n                        brand: \"string\",\n                        name: \"string\",\n                        modelNumber: \"string\",\n                        productModelName: \"string\",\n                        color: \"string\",\n                        browseType: \"string\",\n                        hybridSimSlot: \"string\",\n                        touchScreen: \"string\",\n                        otgCompatible: \"string\",\n                        quickCharging: \"string\",\n                        warranty: \"string\",\n                        operatingSystem: \"string\",\n                        processorCore: \"string\",\n                        clockSpeed: \"string\",\n                        internalStorage: \"string\",\n                        RAM: \"string\",\n                        memoryCardSlotType: \"string\",\n                        displaySize: \"string\",\n                        resolution: \"string\",\n                        resolutionType: \"string\",\n                        primaryCamera: \"string\",\n                        secondaryCamera: \"string\",\n                        battery: \"string\",\n                        price: \"Number\"\n                        screenType: \"string\",\n                        smartTv: \"string\",\n                        HDMI: \"Number\",\n                        USB: \"Number\",\n                        launchYear: \"string\",\n                        weight: \"string\",\n                        dimensions: \"string\",\n                        idealFor: \"string\",\n                        suitableFor: \"string\",\n                        pattern: \"string\",\n                        faded: \"string\",\n                        fabric: \"string\",\n                        rise: \"string\",\n                        size: \"string\",\n                        reversible: \"string\",\n                }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"No Such Product Found\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceProducttypeProductnameVeiwbyname"
  },
  {
    "type": "get",
    "url": "/api/v1/eCommerce/:userName/getCart",
    "title": "get products in the user's Cart by using User name",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>as route parameter The type for making search easier from db.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"User Cart\",\n\t    \"status\": 200,\n\t    \"data\": {\n                    name: \"Name of the user whoose cart\",\n                    items:[\n                        Details of product in the cart\n                    ]\n                }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to find items in Cart\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/route.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceUsernameGetcart"
  }
] });
