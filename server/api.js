'use strict'
const api = require('express').Router()
const db = require('../db')

// moldularise later....
// const campus = require('./campus');
// const student = require('./student');


// GET
// - all campuses
// - a campus by id
// - all students
// - a student by id
// ```

api.get('/student/:id', (req, res, next) => {
  let studentId = req.params.id;
  res.send('arrived at one student called:' + studentId)
})

api.get('/student', (req, res, next) => {
  res.send('arrived at all students')
})

api.get('/campus/:id', (req, res, next) => {
  let campusId = req.params.id;
  res.send('this is the campus: ' + campusId)
})

api.get('/campus', (req, res, next) => {
  res.send('arrived at all campuses')
})


// ```
// POST
// - new campus
// - new student
// ```

api.post('campus', (req, res, next) => {
  res.send('new campus request: ' + req.body)
})


api.post('student', (req, res, next) => {
  res.send('new student request: ' + req.body)
})



// ```
// PUT
// - updated student info for one student
// - updated campus info for one campus
// ```

api.put('campus', (req, res, next) => {
  res.send('new campus update: ' + req.body)
})


api.put('student', (req, res, next) => {
  res.send('new student update: ' + req.body)
})


// ```
// DELETE
// - a campus
// - a student
// ```

api.delete('campus/:id', (req, res, next) => {
  res.send('new campus delete: ' + req.params.id)
})


api.delete('student/:id', (req, res, next) => {
  res.send('new student delete: ' + req.params.id)
})


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({ hello: 'world' }))




module.exports = api
