const express = require('express');
const router = express.Router();

const {getStudent, signup, login} = require('../controllers/student');

//@student GET
router.get('/:roll', getStudent);

//@student signup/login
router.post('/', signup);

//@login existing user
router.post('/login', login);

module.exports = router;
