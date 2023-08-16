const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

//implementation of basic authorzation
const auth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send('Authentication required!');
    }
    else {
        //getting the token from the header
        const token = req.headers.authorization.split(' ')[1];
        //decoding the token
        const decoded = Buffer.from(token, 'base64').toString('ascii');
        //splitting the decoded token into username and password
        const [username, password] = decoded.split(':');
        //checking if the username and password are correct
        if (username === process.env.UNAME && password === process.env.PASSWORD) {
            next();
        } else {
            res.status(401).send('Authentication required!');
        }
    }

        
};


module.exports = auth;