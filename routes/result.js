const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const {getResult, addResult} = require('../controllers/result');

//@result GET
router.get('/:sem/:roll', auth, getResult);

//@ result POST
//@ adding result for a student
router.post('/:sem/:roll', auth, addResult);

module.exports = router;
