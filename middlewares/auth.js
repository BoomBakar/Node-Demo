const express = require('express');
const app = express();
const dotenv = require('dotenv').config();


const auth = (req, res, next) => {
    //implement basic authorization


    const token = req.headers.authorization.split(' ')[1];
    
    const decoded = Buffer.from(token, 'base64').toString('ascii');
    const [username, password] = decoded.split(':');
    
    if (username === process.env.UNAME && password === process.env.PASSWORD) {
        next();
    } else {
        res.status(401).send('Authentication required!');
    }

        
};


module.exports = auth;