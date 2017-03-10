'use strict';

module.exports = function(usersData, cookieText) {
    return {
        authenticate(req, res) {
            console.log("Authenticating user...");
            let username = req.body.username;
            let password = req.body.password;

            usersData.findByUsername(username).then(user => {
                if(user.password == password){
                    let cookie = {
                        username: user.username,
                        cookieText: cookieText
                    };
                    res.send(JSON.stringify(cookie));
                }else{
                  let errorObj = {
                      error: "Your password or username are incorrect!"
                  };

                  res.send(JSON.stringify(errorObj));  
                }
            }).catch(err => {
                let errorObj = {
                      error: "Your password or username are incorrect!"
                };

                res.send(JSON.stringify(errorObj));
            });
        },
        register(req, res){
            console.log("Registering user...");
            let body = req.body;

            usersData.createUser(body).then(user => {
                if(user === undefined || user === null){
                    let errorObj = {
                      error: "Your username is already used!"
                    };

                    res.send(JSON.stringify(errorObj));
                }
                let cookie = {
                        username: user.username,
                        cookieText: cookieText
                };
                res.send(JSON.stringify(cookie));
            }).catch(err => {
                let errorObj = {
                    error: "Your username is already used!"
                };

                res.send(JSON.stringify(errorObj));
            });
        }
    }
}