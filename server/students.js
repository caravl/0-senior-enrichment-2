const api = require('express').Router();
const { Campus, Student } = require('../db/models');

module.exports = api;

// view all students from home
// GET api/students
api.get('/', function (req, res, next) {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
})

// view a single student from students
// GET api/students/:studentId
api.get('/:studentId', function (req, res, next) {
  const studentId = req.params.studentId;
  Student.findAll({ where: { id: studentId } })
    .then(students => res.json(students))
    .catch(next);
});

// create a student
// POST api/students
api.post('/', function (req, res, next) {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next);
})

// update a student's info, including the campus that student is assigned to
// PUT api/students/:studentId
api.put('/:studentId', function (req, res, next) {
  Student.findById(req.params.studentId)
    .then(student => student.update(req.body))
    .catch(next);
})

// delete a student
// DELETE api/students/:studentId
api.delete('/:studentId', function (req, res, next) {
  const studentId = req.paras.studentId;
  Student.destroy( { where: { studentId } } )
    .then( () => res.status(204).end() )
    .catch(next);
})
