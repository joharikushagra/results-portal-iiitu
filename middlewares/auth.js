const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  try {
    const token = req.headers['x-auth-token'];

    if (!token) {
      return res.status(403).json({msg: 'invalid token'});
    }
    const decodedToken = jwt.verify(token, require('../config/keys').jwtKey);
    if (!decodedToken) {
      return res.status(403).json({msg: 'could not find the token'});
    }

    req.user = decodedToken;
    next();
  } catch (error) {
    console.log(error.message);
    if (error.name == 'TokenExpiredError') {
      return res.status(403).json({msg: 'Auth token invalid please login again.'});
    }
    return res.status(403).json({msg: 'Something went wrong'});
  }
}

module.exports = auth;
