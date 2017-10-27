const api = require('express').Router();
const { Campus, Student } = require('../db/models');

module.exports = api;

// Home - all campuses
// GET api/campuses
api.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next)
});

// view a single campus from Home
// GET api/campuses/:campusId
api.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next)
});

// create a campus
// POST api/campuses
api.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next)
});

// update a campus' info, including adding/removing a student to/from that campus
// PUT api//campuses/:campusId
api.put('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => campus.update(req.body))
    .catch(next)
})

// delete a campus
// DELETE api/campuses/:campusId
api.delete('/:campusId', (req, res, next) => {
  const campusId = req.params.campusId;
  Campus.destroy( { where: { campusId } } )
    .then( () => res.status(204).end() )
    .catch(next)
})
