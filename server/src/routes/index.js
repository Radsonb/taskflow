const express = require('express');
const tasksRoutes = require('./tasks');

const router = express.Router();

router.use('/tasks', tasksRoutes);

module.exports = router;