const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  try {
    const token = req.headers['x-auth-token'];
    if (!token) {
      return res.status(501).json({msg: 'invalid token'});
    }
    const decodedToken = jwt.verify(token, require('../config/keys').jwtKey);
    if (!decodedToken) {
      return res.status(501).json({msg: 'could not find the token'});
    }

    req.user = decodedToken;
    next();
  } catch (error) {
    console.log(error.msg);
    return res.status(500).json({msg: 'Something went wrong'});
  }
}

module.exports = auth;
