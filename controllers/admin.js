const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//SIGNUP controller
exports.adminsignup = (req, res) => {
  const {email, password} = req.body;
  if (!email || !password)
    return res.status(400).json({msg: 'admin please fill all the credentials'});

  Admin.findOne({email})
    .then(admin => {
      if (admin) return res.status(400).json({msg: 'admin already exists'});
    })
    .catch(err => res.json({msg: 'unable to get the admin'}));

  const admin = new Admin({
    email,
    password,
  });

  //create salt and hash password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(admin.password, salt, (err, hash) => {
      if (err) throw err;
      admin.password = hash;
      admin.save().then(adminDetails => {
        console.log(adminDetails);
        jwt.sign(
          {id: adminDetails.id},
          require('../config/keys').jwt_adminKey,
          {expiresIn: '1h'},
          (err, token) => {
            if (err) throw err;
            res.json({
              admin: {
                token,
                email: adminDetails.email,
                password: adminDetails.password,
              },
            });
          },
        );
      });
    });
  });
};

//LOGIN controller
exports.adminlogin = (req, res) => {
  const {email, password} = req.body;
  if (!email || !password)
    return res.status(400).json({msg: 'admin please fill up all the credentials'});
  Admin.findOne({email}).then(admin => {
    bcrypt.compare(password, admin.password, (err, same) => {
      if (err) throw err;
      if (!same) return res.status(400).json({msg: 'invalid admin credentials'});
      jwt.sign(
        {id: admin.id},
        require('../config/keys').jwt_adminKey,
        {expiresIn: '1h'},
        (err, token) => {
          if (err) throw err;
          res.json({
            admin: {
              token,
              email: admin.email,
            },
          });
        },
      );
    });
  });
};
