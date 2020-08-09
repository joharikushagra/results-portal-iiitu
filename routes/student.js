const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const {getStudent, signup, login, addStudent} = require('../controllers/student');
const auth = require('../middlewares/auth');

//check token validity
router.get('/verifyToken', (req, res) => {
  const token = req.headers['x-auth-token'];
  if (!token) {
    return res.status(403).json({msg: 'Auth token not found', isAuthenticated: false});
  }
  try {
    const decodedToken = jwt.verify(token, require('../config/keys').jwtKey);
    if (!decodedToken) {
      return res.status(403).json({msg: 'Invalid Token', isAuthenticated: false});
    }
    return res.json({msg: 'Token verified', isAuthenticated: true});
  } catch (error) {
    console.log(error);
    return res
      .status(403)
      .json({msg: 'Auth token invalid please login again.', isAuthenticated: false});
  }
});

//@student GET
router.get('/:roll', getStudent);

//@student signup/login
router.post('/signup', signup);

//@login existing user
router.post('/login', login);

//@Add students
router.post('/addStudents', addStudent);

module.exports = router;
