//const express = require('express');
//const mongoose = require('mongoose');


let helloWorld = (req, res) =>{
    res.send("Hello World");
}

module.exports = {
    hello: helloWorld
};