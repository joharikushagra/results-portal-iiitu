const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

//@result GET
router.get('/:sem/:roll', (req, res) => {
  const {roll, sem} = req.params;
  Result.find({studentRoll: roll}).then(results => {
    results.map(result =>
      result.semester === sem ? res.json(result) : res.json({msg: 'result not found'}),
    );
  });
});

//@ result POST
//@ adding result for a student
router.post('/:sem/:roll', (req, res) => {
  const {subjects, cgpa, sgpa} = req.body;
  const roll = req.params.roll;
  const semester = req.params.sem;

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
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({msg: 'unable to save result'});
    });
});

module.exports = router;
