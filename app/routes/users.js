'use strict'

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');
const serviceCtrl = require('../controllers/common');

// router.get('/users', userCtrl.firstMidForGetFromUsers, userCtrl.getUsers); // we do not call the function we point to that function from the controller
router.get('/users', userCtrl.getUsers, serviceCtrl.responseToJSON('users')); // we do not call the function we point to that function from the controller
router.get('/users/:id', userCtrl.getUserById); // we do not call the function we point to that function from the controller
router.post('/users', userCtrl.createUsers);
router.put('/users/:id', userCtrl.updateUsers);
router.delete('/users/:id', userCtrl.deleteUsers);
router.get('/reports', userCtrl.getReports, serviceCtrl.concatResponses('users', 'products')  );

module.exports = router;
