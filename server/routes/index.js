const express = require('express');
const { getCode, registerUser, login } =  require('../controllers/user.controller');

const router = express.Router();

router.get('/code', getCode);
router.post('/register', registerUser);
router.post('/login', login);

module.exports = router;