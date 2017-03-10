'use strict';

const router = require('express').Router(),
    createUsersController = require('../controller/users-controller'),
    usersData = require('../data/users-data'),
    constants = require("../config/utils/constants");

const usersController = createUsersController(usersData, constants.cookieText);

module.exports = app => {
    router
        .post('/authenticate', usersController.authenticate)
        .post('/register', usersController.register)

    app.use('/users', router);
};