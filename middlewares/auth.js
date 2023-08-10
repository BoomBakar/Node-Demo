const express = require('express');
const app = express();
const dotenv = require('dotenv').config();


const auth = (req, res, next) => {
    const token = req.query.token;  //get token from query
    //check if the a token is provided and it its the right one
    if (!token) return res.status(401).send('Access denied. No token provided.');
    if (token !== process.env.TOKEN) return res.status(401).send('Access denied. Invalid token.');
    next();
};


module.exports = auth;