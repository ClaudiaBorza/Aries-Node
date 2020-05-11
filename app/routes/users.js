'use strict'

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');

// router.get('/users', userCtrl.firstMidForGetFromUsers, userCtrl.getUsers); // we do not call the function we point to that function from the controller
router.get('/users', userCtrl.getUsers); // we do not call the function we point to that function from the controller
router.get('/users/:id', userCtrl.getUserById); // we do not call the function we point to that function from the controller
router.post('/users', userCtrl.createUsers);
router.put('/users/:id', userCtrl.updateUsers);
router.delete('/users/:id', userCtrl.deleteUsers);


/* we moved this in the file users form the controllers directory to make it cleaner

router.get('/users', (req, res, next) => { //rute
    console.log('second midd');
    return res.json({message: 'This is a GET call'})
})

router.post('/users', (req, res, next) => {
    console.log('second midd');
    return res.json({message: 'This is a POST call '})
})

router.put('/users', function (req, res, next) {
    console.log('second midd');
    return res.json({message: 'Message success PUT'});
})

router.delete('/users', function (req, res, next) {
    console.log('second midd');
    return res.json({message: 'Message success DELETE'});
})

*/


module.exports = router;
