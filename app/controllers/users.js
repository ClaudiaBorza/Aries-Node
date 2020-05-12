'use strict'

const User = require('../models/users')
const Product = require('../models/products')

/*module exports*/

module.exports.firstMidForGetFromUsers = firstMidForGetFromUsers;
module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;
module.exports.createUsers = createUsers;
module.exports.updateUsers = updateUsers;
module.exports.deleteUsers = deleteUsers;
module.exports.getReports = getReports;


function firstMidForGetFromUsers(req, res, next) {  //routes
    next({message: 'Error from first midd'})
}


function getUsers(req, res, next) {  //routes
    User.find((error, result) => {
        if (error) {
            console.log('error', error)
        }
        req.resorces.users = result;
        next();
        //  res.json({data: result});
    })
}

function getReports(req, res, next) {  //routes
    console.log('getReports', req)
    User.find((error, resultUsers) => {
        if (error) {
            console.log('error', error)
        }
        Product.find()
            .exec((err, resultProducts) => {
                if (err) {
                    return next(err)
                }
                req.resorces.users = resultUsers;
                req.resorces.products = resultProducts;
                next();
            })
    })


}


function getUserById(req, res, next) {  //routes
    const usersId = req.params.id;
    console.log('Request param user id:', usersId)
    User.find({_id: usersId}, (error, result) => {
        if (error) {
            console.log('error', error)
        }
        return res.json({data: result});
    });
}


function createUsers(req, res, next) {
    const newUser = new User(req.body)
    console.log('body:', req.body)
    console.log('user:', newUser)

    newUser.save(function (err, result) {
        if (err) {
            console.log('err', err)
        }
        return res.json({data: result});
    })

}

function updateUsers(req, res, next) {
    let userId = req.params.id;
    let newUser = req.body;

    console.log(newUser)

    User.findOneAndUpdate({_id: userId}, {name: newUser.name, activities: newUser.activities}, {new: true},
        (err, result) => {

            if (err) {
                console.log('err', err)
            }
            return res.json({data: result});
        })
}

function deleteUsers(req, res, next) {
    let userId = req.params.id;

    User.findOneAndDelete({_id: userId}, (err, result) => {
        if (err) {
            console.log('err', err)
        }
        return res.json({data: result});
    })

}



