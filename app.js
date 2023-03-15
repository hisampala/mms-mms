var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var memberRouter = require("./src/application/router/member")
var packageRouter = require("./src/application/router/package")
var reportRouter = require("./src/application/router/report")


var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/member', memberRouter);
app.use('/package', packageRouter);
app.use('/report', reportRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(400).json(createError({
        message: `not fount url${req.baseUrl}`,
        name: "Not fount url"
    }))

});

module.exports = app;