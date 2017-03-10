'use strict';

const router = require('express').Router(),
    createSignalsController = require('../controller/signals-controller'),
    signalsData = require('../data/signals-data'),
    constants = require("../config/utils/constants");

const signalsController = createSignalsController(signalsData, constants.cookieText);

module.exports = app => {
    router
        .post('/create', signalsController.create)
        .post('/check', signalsController.check)

    app.use('/signals', router);
};