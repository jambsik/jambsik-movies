/* eslint-disable */
const fs = require('fs');
const path = require('path');

const currentDirectory = __dirname;

const loadRoutes = () =>
    new Promise(resolve => {
        const routePrefix = 'routes';
        const routesDirectories = fs
            .readdirSync(currentDirectory)
            .filter(file => fs.statSync(path.join(currentDirectory, file)).isDirectory());
        routesDirectories.forEach((dir, index) => {
            require(`./${dir}/${dir}.${routePrefix}`);
            if (index === routesDirectories.length - 1) {
                resolve(true);
            }
        });
    });

module.exports = {
    loadRoutes
};
