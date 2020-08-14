const express = require('express');
const router = express.Router();
const {auth, adminAuth} = require('../middlewares/auth');
const {getResult, addResult, getAllResuts, getResultFromAdmin} = require('../controllers/result');

/*
@method: GET
@params: roll
@desc: Return all corresponding results
*/
router.get('/getAll/:roll', auth, getAllResuts);

//@result GET
router.get('/:sem/:roll', auth, getResult);

//@ result POST
//@ adding result for a student
router.post('/:sem/add', adminAuth, addResult);

router.get('/search/:sem/:roll', adminAuth, getResultFromAdmin);

module.exports = router;
