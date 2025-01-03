const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');


const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => { 
    console.log(`Connectrd to ${PORT}`);
});

const quoteRouter = require("./quotee.js");
app.use("/api/quotes",quoteRouter);


