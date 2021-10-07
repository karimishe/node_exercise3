const http = require('http');
const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');

const admonRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');


const { application } = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', admonRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(3003)