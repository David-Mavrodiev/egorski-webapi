/*globals require module*/
"use strict";

const Signal = require("../models/signal-model");

module.exports = {
    findAll() {
        let query = Signal.find().where({});
        return Promise.resolve(query.exec());
    },
    findByRegisteredNumber(number) {
        let query = Signal.findOne()
            .where({
                registeredNumber: number
            });

        return Promise.resolve(query.exec());
    },
    createSignal(obj, registeredNumber) {
        let signal = new Signal({
            registeredNumber: registeredNumber,
            firstname: obj.firstname,
            lastname: obj.lastname,
            description: obj.description,
            number: obj.number,
            lat: obj.lat,
            lng: obj.lng,
            answer: "Сигналът все още не е проверен. Моля, опитайте по-късно!"
        });

        return Promise.resolve(signal.save());
    },
    getNumberOfAllSignals() {
        return new Promise((resolve, reject) => {
            Signal.count({}, function(err, count) {
                if (err) {
                    reject(err);
                }
                resolve(count);
            });
        });
    }
};