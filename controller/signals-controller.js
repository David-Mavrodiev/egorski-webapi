'use strict';

module.exports = function(signalsData, cookieText) {
    return {
        create(req, res) {
            console.log("Creating signal...");
            let body = req.body;

            if(cookieText == body.cookieText){
                signalsData.getNumberOfAllSignals().then((count) => {
                  signalsData.createSignal(body, count);
                  let successObj = {
                      count: count,
                      status: "Successfully created signal"
                  };
                  res.send(JSON.stringify(successObj));
                });
            }else{
                let errorObj = {
                    error: "You are not authenticated!"
                };
                res.send(JSON.stringify(errorObj));
            }
        },
        check(req, res) {
            console.log("Checking signal...");
            let body = req.body;
            if (cookieText == body.cookieText) {
                signalsData.findByRegisteredNumber(body.registeredNumber).then((signal) => {
                    res.send(JSON.stringify(signal));
                });
            } else {
                let errorObj = {
                    error: "You are not authenticated!"
                };
                res.send(JSON.stringify(errorObj));
            }
        }
    }
}