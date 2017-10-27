'use strict'
const api = require('express').Router()
const db = require('../db')
const { Campus, Student } = require('../db/models');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
})

api.use('/campuses', require('./campuses'));
api.use('/students', require('./students'));

api.use( (req, res, next) => {
  res.status(404).send(`Something's wrong! Nothing found.`);
});

module.exports = api
