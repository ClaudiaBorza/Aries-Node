'use strict'

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const dateHelper = require('../helpers/date');

module.exports.init = initExpress;

function initExpress(app) {
    // ordinea in care sunt aranjate e importanta
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(function (req, res, next) {       // app middleware
        // middleware  general pt ca nu are ruta , daca are ruta e middleware specific care intra doar pt ruta respectiva
        console.log('Date helper:' + dateHelper.formattedDate())
        next();
    })


    /*app.use('/setting', function (req, res, next) {       // routes middleware
    console.log(`API call ${req.url}`);
    console.log('middleware specific pt settings route');
    console.log('Date helper:' + dateHelper.formattedDate())
    console.log(dateHelper.testDate())
    next();
})
*/

}

