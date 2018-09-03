const express = require('express');
const app = require('./config/server');
const router = require('./router/index.js');

app.use(router);
app.listen(3000, () => console.info(`server started on 3000.........`));
console.log("index.js");
module.exports = app;
