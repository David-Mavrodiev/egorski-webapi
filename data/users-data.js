/*globals require module*/
'use strict';

const User = require('../models/user-model');

module.exports = {
    findByUsername(username) {
        let query = User.findOne()
            .where({
                username: new RegExp(username, "i")
            });

        return Promise.resolve(query.exec());
    },
    findByIsAdmin(condition) {
        let query = User.find()
            .where({
                IsAdmin: condition
            });

        return Promise.resolve(query.exec());
    },
    createUser(obj) {
        let user = new User({
            username: obj.username,
            password: obj.password,
            IsAdmin: false
        });

        return Promise.resolve(user.save());
    }
};