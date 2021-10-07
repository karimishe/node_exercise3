const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const admonRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const { application } = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(admonRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3003)