const express = require('express');
const router = express.Router();

const createUser = require('../controllers/createUser');
const authenticateUser = require('../controllers/authenticateUser');

router.post('/register', createUser);
router.post('/authenticate', authenticateUser);

module.exports = router;