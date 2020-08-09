const Result = require('../models/Result');
const Student = require('../models/Student');

exports.getResult = async (req, res) => {
  const {roll, sem} = req.params;
  // get current logged in user
  const student = await Student.findOne({roll: roll});

  if (!student) return res.status(500).json({msg: 'Student not found.'});
  // logged in student == requesting roll no student
  else if (student._id == req.user.id) {
    // find the result of the student
    Result.find({studentRoll: roll})
      .then(results => {
        // console.log(results)
        if (results.length < 1) return res.json({msg: 'Result not found'});
        results.map(result => (result.semester === sem ? res.json(result) : false));
      })
      .catch(err => res.json({msg: err.message}));
  } else {
    res.status(500).json({msg: 'You are not currently authorized for this request'});
  }
};

exports.addResult = (req, res) => {
  const {roll, sgpa, cgpa, semester, subjects} = req.body;
  // const roll = req.params.roll;
  // const semester = req.params.sem;

  if (!subjects || !cgpa || !sgpa || !roll || !semester)
    return res.status(400).json({msg: 'please fill up all the result fields'});

  const newResult = new Result({
    studentRoll: roll,
    semester,
    subjects,
    cgpa,
    sgpa,
  });

  newResult
    .save()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({msg: 'unable to save result'});
    });
};

exports.getAllResuts = async (req, res) => {
  const {roll} = req.params;
  // Student.findOne({roll: roll})
  //   .then(std => {
  //     if (std.public && req.user.id == std._id) {
  //       Result.find({studentRoll: roll})
  //         .then(results => {
  //           if (results.length > 0) {
  //             res.json({results});
  //           } else {
  //             res.status(500).json({msg: `No results found for Roll No.  ${roll}`});
  //           }
  //         })
  //         .catch(err => {
  //           console.log(err);
  //           res.status(500).json({msg: 'Something went wrong'});
  //         });
  //     } else {
  //       res.json({msg: 'Results not found. Inavlid roll'});
  //     }
  //   })
  //   .catch(err => {
  //     console.log(err.message);
  //     res.status(400).json({msg: 'student not find'});
  //   });
  // get current logged in user
  const student = await Student.findOne({roll: roll});

  if (!student) return res.status(500).json({msg: 'Student not found.'});
  // logged in student == requesting roll no student
  else if (student._id == req.user.id) {
    // find the result of the student
    Result.find({studentRoll: roll})
      .then(results => {
        // console.log(results)
        if (results.length < 1) return res.json({msg: 'Result not found'});
        return res.json(results);
      })
      .catch(err => res.json({msg: err.message}));
  } else {
    res.status(500).json({msg: 'You are not currently authorized for this request'});
  }
};
