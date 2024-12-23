const express = require('express');
const os = require("os");



const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const quoteRouter = express.Router();


quoteRouter.get("/random", (req, res, next) => {
    res.send(getRandomElement(quotes));
    let sysytemUpdatime = os.sysytemUpdatime();
    console.log(sysytemUpdatime);
});

quoteRouter.get("/", (req, res, next) => {
    const personsName = req.query.person;
    if(personsName){
        const arr = [];
        for(let i =0; i < quotes.length; i++){
            if(quotes[i].person === personsName){
                arr.push(quotes[i]);
            }
        
        }
        res.send(arr);

    }else {
    res.send(quotes);

    }
});

quoteRouter.post("/", (req, res, next) => {
    const newElement = req.query;
    if(newElement){
        quotes.push(newElement);
        res.status(201).send(newElement);
    }else {
        res.status(400).send();
    }
});




module.exports = quoteRouter;