const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');
const PORT = config.PORT;
const modules = require('./modules');
const router = require('./modules/router').router;

/**
 * Body Parser
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const getApp = () => {
    return new Promise((resolve, reject) => {
        modules
            .loadRoutes()
            .then((loaded) => {
                if (loaded) {
                    app.use(router);
                    resolve(app);
                }
                reject(new Error('Cannot load app server'));
            })
            .catch((err) => {
                reject(err);
            });
    });
};
const init = () => {
    return new Promise((resolve, reject) =>
        getApp()
            .then((_app) => {
                _app
                    .listen(PORT, () => {
                        console.log(`SERVER RUNNING IN PORT: ${PORT}`);
                        resolve(true);
                    })
                    .on('error', (err) => {
                        reject(err);
                    });
            })
            .catch((err) => {
                reject(err);
            }));
};
module.exports = {
    init,
    getApp
};
