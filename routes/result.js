const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const {getResult, addResult, getAllResuts} = require('../controllers/result');

//@result GET
router.get('/:sem/:roll', auth, getResult);

/*
  @method: GET
  @params: roll
  @desc: Return all corresponding results
*/
router.get('/getAll/student/:roll', auth, getAllResuts);
// router.get('/getAll/student/:roll', (req, res) => console.log('dk'));

//@ result POST
//@ adding result for a student
router.post('/:sem/:roll', auth, addResult);

module.exports = router;
