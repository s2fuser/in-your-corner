const express = require('express');
const { getCode, registerUser, login, getTrellesTunes, getStories, getProLife } =  require('../controllers/user.controller');

const router = express.Router();

router.get('/code', getCode);
router.post('/register', registerUser);
router.post('/login', login);
router.get('/getTrellesTunes', getTrellesTunes);
router.get('/getStories', getStories);
router.get('/getProLife', getProLife);

module.exports = router;