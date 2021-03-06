const express = require('express');
const router = express.Router();
const controller = require('./users.controller');

router.post('/signUp', controller.signUp);
router.post('/login', controller.login);

module.exports = router;
