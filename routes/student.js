const express = require('express');
const router = express.Router();

const {getStudent, signup, login} = require('../controllers/student');
const auth = require('../middlewares/auth');

//check token validity
router.get('/authenticated', auth, (req, res) => {
  if (req.user.id) {
    return res.json({isAuthenticated: true});
  }
});

//@student GET
router.get('/:roll', getStudent);

//@student signup/login
router.post('/', signup);

//@login existing user
router.post('/login', login);

module.exports = router;
