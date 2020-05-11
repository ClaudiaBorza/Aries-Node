'use strict'
const path = require('path');

module.exports.init = initRoutes; //exportam functia nu o apelam

function initRoutes(app) {
    const routesPath = path.join(__dirname, '../app/routes')
    console.log('dirname', __dirname)
    const routes = ['users', 'products'];
    console.log('routes', routes)

    routes.forEach((route) => {
        app.use(require(routesPath + '/' + route))
    })
}

