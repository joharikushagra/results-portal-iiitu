const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//@student GET
router.get('/:roll', (req, res) => {
  Student.findOne({roll: req.params.roll})
    .then(student => res.json(student))
    .catch(err => res.json({msg: 'unable to get students'}));
});

//@student signup/login
router.post('/', (req, res) => {
  const {name, branch, roll, email, password} = req.body;
  if (!name || !roll || !branch || !email || !password) {
    return res.status(400).json({msg: 'fill up all the credentials'});
  }

  //checking existing student in database
  Student.findOne({email}).then(student => {
    if (student) return res.status(400).json({msg: 'user already exist'});
  });

  const newStudent = new Student({
    name,
    branch,
    roll,
    email,
    password,
  });

  //create salt and hash
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newStudent.password, salt, (err, hash) => {
      if (err) throw err;
      newStudent.password = hash;
      newStudent.save().then(student => {
        jwt.sign(
          {id: student.id},
          require('../config/keys').jwtKey,
          {expiresIn: 3600},
          (err, token) => {
            if (err) throw err;
            res.json({
              student: {
                token,
                name: student.name,
                branch: student.branch,
                roll: student.roll,
                email: student.email,
                password: student.password,
              },
            });
          },
        );
      });
    });
  });
});

//@login existing user
router.post('/login', (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) return res.status(400).json({msg: 'fill all the credentials'});
  //   let isvalidPassword=false;
  Student.findOne({email})
    .then(student => {
      bcrypt.compare(password, student.password, (err, same) => {
        if (err) throw err;
        if (!same) return res.status(400).json({msg: 'inavlid credentials'});
        jwt.sign(
          {id: student.id},
          require('../config/keys').jwtKey,
          {expiresIn: 3600},
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              student: {
                email: student.email,
                password: student.password,
              },
            });
          },
        );
      });
      // if (!isvalidPassword)
      //   return res.status(400).json({msg: 'inavlid credentials'});
    })
    .catch(err => res.status(400).json({msg: 'invalid Credential'}));
});

module.exports = router;
