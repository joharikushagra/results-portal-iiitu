const Student = require('../models/Student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const csv = require('fast-csv');
const auth = require('../middlewares/auth');
const fs = require('fs');
const emailBody = require('../Email.template');
const nodemailer = require('nodemailer');

// let inputStream = fs.createReadStream('../studentDataCSV/Book2.csv', 'utf8');

// Nodemailer config
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const transporter = nodemailer.createTransport({
  service: process.env.NM_SERVICE,
  auth: {
    user: process.env.NM_FROM,
    pass: process.env.NM_PASSWORD,
  },
});

exports.getStudent = (req, res) => {
  Student.findOne({roll: req.params.roll})
    .then(student => {
      student.password = '';
      return res.json(student);
    })
    .catch(err => res.json({msg: 'unable to get students'}));
};

exports.signup = (req, res) => {
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
};

exports.login = (req, res) => {
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
                name: student.name,
                roll: student.roll,
                email: student.email,
                public: student.public,
              },
            });
          },
        );
      });
      // if (!isvalidPassword)
      //   return res.status(400).json({msg: 'inavlid credentials'});
    })
    .catch(err => res.status(400).json({msg: 'invalid Credential'}));
};

exports.addStudent = (req, res) => {
  const {name, branch, roll, email, password} = req.body;
  if (!name || !branch || !roll || !email || !password) {
    return res.status(400).json({msg: 'some student details are missing'});
  }
  const newStudent = new Student({
    name,
    branch,
    roll,
    email,
    password,
  });

  //hashing password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newStudent.password, salt, (err, hash) => {
      newStudent.password = hash;
      newStudent
        .save()
        .then(std => {
          // Email
          const mailOptions = {
            from: 'pkspyder007@gmail.com', // sender address
            to: std.email, // list of receivers
            subject: 'Results Portal username password', // Subject line
            html: emailBody(std.email, password, std.name),
          };

          transporter.sendMail(mailOptions, (err, info) => {
            if (err) console.log('email err: ', err);
            else {
              console.log('email sent...');
            }
          });

          // Email end
          return res.status(200).json({msg: 'students data successfully added'});
        })
        .catch(err => res.status(400).json({msg: 'some problem in uploading student data'}));
    });
  });
};

// exports.addStudent = (req, res) => {
//   let csvStream = csv
//     .parseFile('Book2.csv', {headers: true})
//     .on('data', record => {
//       csvStream.pause();
//       const newStudent = new Student({
//         name: record.name,
//         branch: record.branch,
//         roll: record.roll,
//         email: record.email,
//         password: record.password,
//       });

//       //hashing password
//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newStudent.password, salt, (err, hash) => {
//           newStudent.password = hash;
//           newStudent
//             .save()
//             .then(() => res.status(200).json({msg: 'students data successfully added'}))
//             .catch(err => res.status(400).json({msg: 'some problem in uploading student data'}));
//         });
//       });
//       csvStream.resume();
//     });
// };
