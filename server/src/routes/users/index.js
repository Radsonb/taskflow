const express = require('express');
const { userController } = require('../../controller');
const router = express.Router();

router.get('/', userController.list);
router.post('/signup', userController.create);
router.put('/:id', userController.update)

module.exports = router;