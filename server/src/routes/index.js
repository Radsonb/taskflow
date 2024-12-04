const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Horário: ', Date.now());
    next();
  });

const usersRoutes = require('./users');

router.use('/users', usersRoutes);

module.exports = router