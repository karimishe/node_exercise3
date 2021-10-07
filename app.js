const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("in the middle 1");
    next();
});


app.use((req, res, next) => {
    console.log("in the middle 2");
    res.send('<h1> Hello from express </h1>');
});


app.listen(3003)