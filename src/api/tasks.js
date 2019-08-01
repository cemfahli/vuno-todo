const express = require('express');
const router = express.Router();
const validate = require('../middleware/validateUser');

const getTasks = require('../controllers/getTasks');
const createTask = require('../controllers/createTask');
const deleteTask = require('../controllers/deleteTask');

router.get('/items', validate, getTasks);
router.post('/items', validate, createTask);
router.delete('/items/:id', validate, deleteTask);

module.exports = router;