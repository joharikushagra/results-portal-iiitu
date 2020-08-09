const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {adminsignup, adminlogin} = require('../controllers/admin');

// check token validity
router.get('/verifyToken', (req, res) => {
  const token = req.headers['x-auth-token'];
  if (!token) {
    return res.status(403).json({msg: 'Auth token not found', isAuthenticated: false});
  }
  try {
    const decodedToken = jwt.verify(token, require('../config/keys').jwt_adminKey);
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

//@aAdmin POST
router.post('/result-portal/captain/signup', adminsignup);

//@Admin POST
//login
router.post('/result-portal/captain/login', adminlogin);

module.exports = router;
