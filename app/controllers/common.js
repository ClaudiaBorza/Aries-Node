'use strict'

module.exports.responseToJSON = responseToJSON;
module.exports.concatResponses = concatResponses;

function responseToJSON(prop) {
    return function (req, res, next) {
        res.json(req.resorces[prop])
    }
}

function concatResponses(prop, prop1) {
    return function (req, res, next) {
        res.json(req.resorces[prop].concat(req.resorces[prop1]))
    }
}


