const express = require('express');
const { getCode, registerUser, login, getTrellesTunes, getStories, getProLife, getShorts, getMovies, contact } =  require('../controllers/user.controller');

const router = express.Router();

router.get('/code', getCode);
router.post('/register', registerUser);
router.post('/login', login);
router.get('/getTrellesTunes', getTrellesTunes);
router.get('/getStories', getStories);
router.get('/getProLife', getProLife);
router.get('/getShorts', getShorts);
router.get('/getMovies', getMovies);

router.post('/contact', contact);



module.exports = router;